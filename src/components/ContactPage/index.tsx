import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SectionLabel } from '../shared/Primitives';
import { getProfile } from '../../services/profile';
import { profileModel } from '@shared/models';

type ResultButton = 'Success' | 'Danger';

const inputClasses =
  'w-full px-3.5 py-2.5 text-sm rounded-md border border-border bg-input-background text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-primary/50 focus:ring-[3px] focus:ring-ring/40 transition-colors';

function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [profile, setProfile] = useState(profileModel.empty);
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({ user_email: '', subject: '', body: '' });
  const [formValid, setFormValid] = useState({ user_email: false, subject: false, body: false });

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  const contactLinks = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: MapPin, label: profile.location, href: null },
  ];

  const notify = (s: ResultButton) => {
    if (s === 'Success') {
      toast('Email sent successfully!', {
        theme: 'colored',
        style: { backgroundColor: 'lightgreen', color: 'black' },
        position: 'top-right',
        autoClose: 3000,
      });
    } else {
      toast('Email failed! Please ensure you have entered a valid email, subject, and body.', {
        theme: 'colored',
        style: { backgroundColor: '#ff6868', color: 'black' },
        position: 'top-right',
        autoClose: 5000,
      });
    }
  };

  useEffect(() => {
    setFormValid((prev) => ({ ...prev, user_email: validator.isEmail(formValue.user_email) }));
  }, [formValue.user_email]);

  useEffect(() => {
    setFormValid((prev) => ({ ...prev, subject: !validator.isEmpty(formValue.subject) }));
  }, [formValue.subject]);

  useEffect(() => {
    setFormValid((prev) => ({ ...prev, body: !validator.isEmpty(formValue.body) }));
  }, [formValue.body]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        'service_lha85ip',
        'template_qqlvfre',
        formRef.current as HTMLFormElement,
        'oGwhiciNhFAOwztGo'
      )
      .then(
        () => {
          notify('Success');
          formRef.current?.reset();
          setFormValue({ user_email: '', subject: '', body: '' });
          setFormValid({ body: false, user_email: false, subject: false });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          notify('Danger');
          setLoading(false);
        }
      );
  };

  const isValid = formValid.user_email && formValid.subject && formValid.body;

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute top-0 left-0 w-[55%] aspect-square rounded-full bg-primary/[0.06] blur-[110px] -translate-x-1/3 -translate-y-1/3" aria-hidden />
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-[-0.02em]">Get in touch</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-12">
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-[0.95rem] text-muted-foreground leading-[1.8]">
              Whether you have a question or just want to say hi, I'll do my best to get
              back to you.
            </p>
            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                const content = (
                  <>
                    <span className="flex items-center justify-center size-9 rounded-md border border-border bg-card text-muted-foreground group-hover:text-primary transition-colors">
                      <Icon size={16} />
                    </span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors break-all">
                      {link.label}
                    </span>
                  </>
                );
                return link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={link.label} className="group flex items-center gap-3">
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 p-6 sm:p-8 rounded-xl border border-border bg-card"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="user_email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                required
                value={formValue.user_email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className={inputClasses}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                value={formValue.subject}
                onChange={handleInputChange}
                placeholder="Message subject"
                className={inputClasses}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="body" className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="body"
                name="body"
                rows={6}
                required
                value={formValue.body}
                onChange={handleInputChange}
                placeholder="Your message"
                className={`${inputClasses} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={!isValid || loading}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={14} />
              {loading ? 'Sending...' : 'Send message'}
            </button>
          </motion.form>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </section>
  );
}

export default ContactPage;
