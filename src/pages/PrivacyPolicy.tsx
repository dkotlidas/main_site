import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Privacy Policy | Dimitrios Kotlidas</title>
        <meta name="description" content="How Dimitrios Kotlidas collects, uses, and safeguards your personal data in compliance with GDPR." />
        <link rel="canonical" href="https://dkotlidas.com/privacy-policy" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Privacy Policy | Dimitrios Kotlidas" />
        <meta property="og:description" content="GDPR-compliant privacy policy for dkotlidas.com." />
        <meta property="og:url" content="https://dkotlidas.com/privacy-policy" />
      </Helmet>
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-heading font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground font-body leading-relaxed">
          <p className="text-sm">Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>

          <h2 className="text-2xl font-heading font-bold text-foreground mt-10">1. Introduction</h2>
          <p>
            Dimitrios Kotlidas ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website, in compliance with the General Data Protection Regulation (GDPR).
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mt-10">2. Data Controller</h2>
          <p>
            The data controller responsible for your personal data is:<br />
            <strong className="text-foreground">Dimitrios Kotlidas</strong><br />
            Based in Strasbourg, France<br />
            Contact: via the contact form on this website
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mt-10">3. Data We Collect</h2>
          <p>We may collect the following personal data through our contact form:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Service interest</li>
            <li>Message content</li>
            <li>Newsletter subscription preference</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-foreground mt-10">4. Purpose of Processing</h2>
          <p>Your personal data is processed for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>To respond to your inquiry</li>
            <li>To provide the services you requested</li>
            <li>To send marketing updates and tips, if you opted in to our newsletter</li>
            <li>To improve our website and services</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-foreground mt-10">5. Legal Basis</h2>
          <p>
            We process your personal data based on your explicit consent (Article 6(1)(a) GDPR), which you provide by checking the consent box on our contact form. For newsletter communications, we rely on separate, freely given consent via the optional newsletter checkbox. You may unsubscribe from the newsletter at any time without affecting your inquiry.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mt-10">6. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, typically no longer than 12 months after your last interaction with us.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mt-10">7. Your Rights</h2>
          <p>Under the GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request erasure of your data</li>
            <li>Restrict processing</li>
            <li>Data portability</li>
            <li>Object to processing</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us through the contact form on our website.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mt-10">8. Cookies & Tracking</h2>
          <p>
            This website may use cookies and tracking technologies (such as Google Tag Manager) for analytics and advertising purposes. You can manage your cookie preferences through your browser settings.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mt-10">9. Third-Party Services</h2>
          <p>
            We may share your data with trusted third-party services (e.g., Google Ads, Meta) solely for the purpose of providing and improving our services. These parties are also bound by GDPR requirements.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mt-10">10. Changes to This Policy</h2>
          <p>
            We reserve the right to update this privacy policy at any time. Any changes will be posted on this page with an updated revision date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
