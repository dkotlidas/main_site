ALTER TABLE public.leads
  ADD CONSTRAINT leads_status_check
    CHECK (status IN ('new', 'contacted', 'qualified', 'closed'));

ALTER TABLE public.leads
  ADD CONSTRAINT leads_service_check
    CHECK (service IN (
      'Meta & Social Ads', 'Google Ads', 'Tag Manager Setup',
      'Tracking & Attribution', 'Strategy',
      'Creative Direction', 'Consulting & Training'
    ));