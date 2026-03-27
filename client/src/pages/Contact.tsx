import { MapPin, Mail, Clock, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    // Mock submit (frontend-only)
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-6 max-w-6xl">

        {/* Page Header */}
        <div className="text-center mb-12 space-y-4">
          <h1
            className="font-heading text-4xl md:text-5xl font-bold text-foreground"
            data-testid="text-contact-title"
          >
            Contact
          </h1>
          <p
            className="text-xl text-muted-foreground"
            data-testid="text-contact-subtitle"
          >
            Reach out for fabric enquiries, orders, and support.
          </p>
        </div>

        {/* Two-column layout: Info + Form */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8" data-testid="section-business-info">
            <div className="grid gap-6">
              <Card className="border-none shadow-md bg-muted/30">
                <CardContent className="p-6 flex items-start gap-4">
                  <div
                    className="bg-primary/10 p-3 rounded-full"
                    data-testid="icon-address"
                  >
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-lg mb-1"
                      data-testid="text-address-title"
                    >
                      Address
                    </h3>
                    <div
                      className="text-muted-foreground space-y-1"
                      data-testid="text-address"
                    >
                      <p data-testid="text-brand">Centuary Fab</p>
                      <p data-testid="text-street">
                        5/1, Natrayan Kovil St, water office road
                      </p>
                      <p data-testid="text-city-state-postal">
                        Erode, Tamil Nadu 638003
                      </p>
                      <p data-testid="text-country">India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-muted/30">
                <CardContent className="p-6 flex items-start gap-4">
                  <div
                    className="bg-primary/10 p-3 rounded-full"
                    data-testid="icon-email"
                  >
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-lg mb-1"
                      data-testid="text-email-title"
                    >
                      Email
                    </h3>
                    <a
                      href="mailto:centuaryfab@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="link-email"
                    >
                      centuaryfab@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-muted/30">
                <CardContent className="p-6 flex items-start gap-4">
                  <div
                    className="bg-primary/10 p-3 rounded-full"
                    data-testid="icon-hours"
                  >
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-lg mb-1"
                      data-testid="text-hours-title"
                    >
                      Business Hours
                    </h3>
                    <p
                      className="text-muted-foreground"
                      data-testid="text-hours"
                    >
                      9:30 AM – 7:00 PM
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-muted/30">
                <CardContent className="p-6 flex items-start gap-4">
                  <div
                    className="bg-primary/10 p-3 rounded-full"
                    data-testid="icon-phone"
                  >
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-lg mb-1"
                      data-testid="text-phone-title"
                    >
                      Phone
                    </h3>
                    <a
                      href="tel:+918148008588"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="link-phone"
                    >
                      +918148008588
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h2
                className="font-heading text-2xl font-semibold mb-6"
                data-testid="text-form-title"
              >
                Send a message
              </h2>

              <Form {...form}>
                <form
                  action="https://formspree.io/f/mqegagqw"
                  method="POST"
                  className="space-y-6"
                  data-testid="form-contact"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel data-testid="label-name">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage data-testid="error-name" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel data-testid="label-email">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="you@email.com"
                            type="email"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage data-testid="error-email" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel data-testid="label-subject">
                          Subject
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="What can we help with?"
                            {...field}
                            data-testid="input-subject"
                          />
                        </FormControl>
                        <FormMessage data-testid="error-subject" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel data-testid="label-message">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Write your message..."
                            className="min-h-[140px]"
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage data-testid="error-message" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    data-testid="button-submit"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Google Map Section */}
        <div className="mt-16" data-testid="section-map">
          <h2
            className="font-heading text-2xl font-semibold mb-6 text-foreground"
            data-testid="text-map-title"
          >
            Our Location
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg w-full h-[380px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4808.179379981675!2d77.71786827588647!3d11.353753188832318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f33bfad08f1%3A0xeccba746c62c537a!2scentuaryfab!5e1!3m2!1sen!2sin!4v1774526187858!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Centuary Fab Location"
              data-testid="embed-map"
            />
          </div>
        </div>

      </div>
    </div>
  );
}