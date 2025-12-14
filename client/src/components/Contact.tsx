import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      toast.success("Message sent successfully!");
      // Don't clear form, just leave it disabled
    },
    onError: (error) => {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    mutation.mutate(formData);
  };

  const isSent = mutation.isSuccess;

  return (
    <section id="contact" className="min-h-[80vh] flex flex-col justify-between px-6 md:px-8 py-24 bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <h2 className="text-[8vw] leading-[0.8] font-medium tracking-tighter mb-8">
            LET'S<br />BUILD
          </h2>
          <div className="font-mono text-sm space-y-2 opacity-70">
            <p>COLUMBUS, OH</p>
            <p>RUPPAUL@UMICH.EDU</p>
            <p>+1 734 280 8035</p>
          </div>
        </div>

        <div className="md:col-span-6 flex items-end">
          <form onSubmit={handleSubmit} className={`w-full space-y-0 ${isSent ? 'opacity-50 pointer-events-none' : ''}`}>
            <div className="border-t border-white/20">
              <Input
                placeholder="NAME"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-transparent border-0 rounded-none h-16 px-0 text-xl font-mono focus-visible:ring-0 placeholder:text-white/30 text-white"
                disabled={isSent || mutation.isPending}
              />
            </div>
            <div className="border-t border-white/20">
              <Input
                placeholder="EMAIL"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-transparent border-0 rounded-none h-16 px-0 text-xl font-mono focus-visible:ring-0 placeholder:text-white/30 text-white"
                disabled={isSent || mutation.isPending}
              />
            </div>
            <div className="border-t border-white/20">
              <Input
                placeholder="PHONE NUMBER"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-transparent border-0 rounded-none h-16 px-0 text-xl font-mono focus-visible:ring-0 placeholder:text-white/30 text-white"
                disabled={isSent || mutation.isPending}
              />
            </div>
            <div className="border-t border-white/20">
              <Textarea
                placeholder="MESSAGE"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-transparent border-0 rounded-none h-32 px-0 py-4 text-xl font-mono focus-visible:ring-0 placeholder:text-white/30 resize-none text-white"
                disabled={isSent || mutation.isPending}
              />
            </div>
            <div className="border-t border-b border-white/20">
              <Button
                type="submit"
                disabled={isSent || mutation.isPending}
                className="w-full bg-white hover:bg-gray-200 text-black rounded-none h-16 font-mono text-lg uppercase tracking-wide"
              >
                {isSent ? "[ Sent Successfully ]" : mutation.isPending ? "[ Sending... ]" : "[ Send Transmission ]"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      <footer className="mt-24 flex justify-between font-mono text-xs uppercase opacity-40">
        <div>© {new Date().getFullYear()} RUP UTPAL PAUL</div>
        <div>MANUFACTURING ENGINEER</div>
      </footer>
    </section>
  );
}
