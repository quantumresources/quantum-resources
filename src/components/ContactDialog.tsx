import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useState } from 'react';

const ContactDialog = ({ children }: { children: React.ReactNode }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>Fill out the form and we'll get back to you soon.</DialogDescription>
        </DialogHeader>
        {formStatus === 'success' ? (
          <div className="text-green-600 font-semibold text-center py-8">Thank you! Your message has been sent.</div>
        ) : (
          <form
            action="https://formspree.io/f/xyzjlvbg"
            method="POST"
            className="space-y-4"
            onSubmit={e => {
              setFormStatus('idle');
              setTimeout(() => setFormStatus('success'), 1000);
            }}
          >
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="full-name">Full Name<span className="text-red-500">*</span></label>
              <input required name="Full Name" id="full-name" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address<span className="text-red-500">*</span></label>
              <input required type="email" name="Email" id="email" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
              <input name="Phone" id="phone" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="company">Company Name</label>
              <input name="Company" id="company" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">Message / Inquiry<span className="text-red-500">*</span></label>
              <textarea required name="Message" id="message" className="w-full border rounded px-3 py-2" rows={4} />
            </div>
            <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded font-semibold hover:bg-purple-800 transition">Submit</button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog; 