import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppointments } from './appointments-table.resource';
import AppointmentsBaseTable from './appointments-base-table.component';
import { AppointmentTypes } from '../types';

interface CancelledAppointmentProps {
  status: string;
}

const CancelledAppointment: React.FC<CancelledAppointmentProps> = ({ status }) => {
  const { t } = useTranslation();
  const { appointments, isLoading } = useAppointments(status);

  return (
    <div>
      <AppointmentsBaseTable
        appointments={appointments}
        isLoading={isLoading}
        tableHeading={AppointmentTypes.CANCELLED}
      />
    </div>
  );
};

export default CancelledAppointment;
