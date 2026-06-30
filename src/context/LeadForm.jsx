import { createContext, useContext, useState, useCallback } from 'react';
import LeadModal from '../components/LeadModal';

const LeadFormContext = createContext(() => {});

export function useLeadForm() {
  return useContext(LeadFormContext);
}

export function LeadFormProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openForm = useCallback(() => setOpen(true), []);
  const closeForm = useCallback(() => setOpen(false), []);

  return (
    <LeadFormContext.Provider value={openForm}>
      {children}
      <LeadModal open={open} onClose={closeForm} />
    </LeadFormContext.Provider>
  );
}
