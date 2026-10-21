import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { postJson } from '@/lib/api';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [honeypot, setHoneypot] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      await postJson('/site/feedback', {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        website: honeypot, // kolom jebakan bot (harus kosong)
      });

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  }

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald">
            Get In Touch
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Feedback &amp; Contact
          </h2>
          <p className="mt-4 text-lg text-muted">
            Have a suggestion, found a bug, or want to collaborate? We&rsquo;d love to hear from you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-ink/8 bg-white/50 p-8 shadow-sm md:p-10"
        >
          {/* Jebakan bot: disembunyikan dari manusia */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status === 'submitting'}
                placeholder="Your name"
                className="w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/15 disabled:opacity-50"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'submitting'}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/15 disabled:opacity-50"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-5">
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={status === 'submitting'}
              placeholder="Share your thoughts, suggestions, or report an issue..."
              className="w-full resize-none rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/15 disabled:opacity-50"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald px-6 py-3.5 text-base font-semibold text-cream shadow-lg shadow-emerald/20 transition-all duration-300 hover:bg-emerald-dark hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Send Message
              </>
            )}
          </button>

          {/* Success state */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center gap-2.5 rounded-xl border border-emerald/20 bg-emerald/5 px-4 py-3 text-sm text-emerald-dark"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald" />
              <span>Thank you! Your message has been sent successfully.</span>
            </motion.div>
          )}

          {/* Error state */}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center gap-2.5 rounded-xl border border-red-300/30 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              <AlertCircle className="h-5 w-5 shrink-0 text-red-500" />
              <span>{errorMsg}</span>
            </motion.div>
          )}
        </motion.form>

        {/* Decorative icon */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 text-sm text-muted">
            <MessageSquare className="h-4 w-4 text-emerald" />
            <span>We typically respond within 48 hours.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
