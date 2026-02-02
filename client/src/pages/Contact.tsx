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
      <div className="container max-w-6xl">
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
                        254, Arumugam Street, Thirunagar Colony
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
                      href="tel:+91XXXXXXXXXX"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="link-phone"
                    >
                      +91 XXXXX XXXXX
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
                  onSubmit={form.handleSubmit(onSubmit)}
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
      </div>
    </div>
  );
}
