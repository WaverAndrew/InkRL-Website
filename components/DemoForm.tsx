'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function DemoForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, company }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(data.message || "Thank you! We'll be in touch soon.")
        setEmail('')
        setName('')
        setCompany('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <motion.form
      id="demo"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto p-8 border-2 border-ink/20 rounded-sm bg-paper"
    >
      <h3 className="font-mono text-2xl font-medium mb-6">Get a demo</h3>
      
      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-sans mb-2 text-muted-gray">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-ink/20 rounded-sm bg-paper font-sans focus:border-ink focus:outline-none"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-sans mb-2 text-muted-gray">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-ink/20 rounded-sm bg-paper font-sans focus:border-ink focus:outline-none"
            required
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-sans mb-2 text-muted-gray">
            Company (optional)
          </label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-2 border border-ink/20 rounded-sm bg-paper font-sans focus:border-ink focus:outline-none"
          />
        </div>
      </div>

      {message && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-sm font-sans mb-4 ${
            status === 'success' ? 'text-ink' : 'text-red-600'
          }`}
        >
          {message}
        </motion.p>
      )}

      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
        whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
        className="w-full px-6 py-3 border-2 border-ink rounded-sm font-sans text-sm hover:bg-ink hover:text-paper transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit'}
      </motion.button>
    </motion.form>
  )
}

