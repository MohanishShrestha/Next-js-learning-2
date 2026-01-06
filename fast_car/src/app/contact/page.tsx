"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold mb-4">
            Contact <span className="text-green-600">Us</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Have questions about cars, pricing, or financing? Our team is ready
            to help you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <InfoCard icon={Mail} title="Email" value="support@fastcar.com" />
            <InfoCard icon={Phone} title="Phone" value="+977 98XXXXXXXX" />
            <InfoCard icon={MapPin} title="Location" value="Kathmandu, Nepal" />
          </div>

          {/* Contact Form */}
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" rows={5} />
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* Info Card Component */
function InfoCard({
  icon: Icon,
  title,
  value,
}: {
  icon: any;
  title: string;
  value: string;
}) {
  return (
    <Card className="flex items-center gap-4 p-5 border-none shadow-sm rounded-xl">
      <div className="bg-green-100 text-green-600 p-3 rounded-xl">
        <Icon size={22} />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-500 text-sm">{value}</p>
      </div>
    </Card>
  );
}
