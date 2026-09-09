// iGenie Labs 2026 general holidays, per location. Each list is complete/self-contained.
// Employees see exactly one list based on their state: AP -> AP, TS -> TS, anything else -> DEL (New Delhi).
export const HOLIDAYS_2026 = {
  AP: [
    ['Bhogi', '2026-01-14'],
    ['Makara Sankranti', '2026-01-15'],
    ['Kanuma', '2026-01-16'],
    ['Republic Day', '2026-01-26'],
    ['Maha Shivaratri', '2026-02-15'],
    ['Holi', '2026-03-03'],
    ['Ugadi', '2026-03-19'],
    ['Eid-ul-Fitr (Ramzan)', '2026-03-20'],
    ['Sri Rama Navami', '2026-03-27'],
    ['Good Friday', '2026-04-03'],
    ['Eid-ul-Adha (Bakrid)', '2026-05-27'],
    ['Moharrum', '2026-06-25'],
    ['Independence Day', '2026-08-15'],
    ['Vara Lakshmi Vratham', '2026-08-21'],
    ['Sri Krishnaashtami', '2026-09-04'],
    ['Vinayaka Chavithi', '2026-09-14'],
    ['Mahatma Gandhi Jayanti', '2026-10-02'],
    ['Vijaya Dasami', '2026-10-20'],
    ['Deepavali', '2026-11-09'],
    ['Christmas', '2026-12-25'],
  ],
  TS: [
    ['Bhogi', '2026-01-14'],
    ['Sankranti / Pongal', '2026-01-15'],
    ['Kanuma', '2026-01-16'],
    ['Republic Day', '2026-01-26'],
    ['Maha Shivaratri', '2026-02-16'],
    ['Holi', '2026-03-03'],
    ['Ugadi', '2026-03-19'],
    ['Eidul Fitr (Ramzan)', '2026-03-21'],
    ['Sri Rama Navami', '2026-03-27'],
    ['Good Friday', '2026-04-03'],
    ['Eid-ul-Azha (Bakrid)', '2026-05-27'],
    ['Bonalu', '2026-08-10'],
    ['Independence Day', '2026-08-15'],
    ['Sri Krishnaashtami', '2026-09-04'],
    ['Vinayaka Chavithi', '2026-09-14'],
    ['Mahatma Gandhi Jayanti', '2026-10-02'],
    ['Saddula Bathukamma', '2026-10-18'],
    ['Vijaya Dasami', '2026-10-20'],
    ['Deepavali', '2026-11-09'],
    ['Christmas', '2026-12-25'],
  ],
  DEL: [
    ['Pongal', '2026-01-14'],
    ['Makara Sankranti', '2026-01-15'],
    ['Republic Day', '2026-01-26'],
    ['Maha Shivaratri', '2026-02-15'],
    ['Holi', '2026-03-04'],
    ['Id-ul-Fitr', '2026-03-21'],
    ['Ram Navami', '2026-03-26'],
    ['Good Friday', '2026-04-03'],
    ['Buddha Purnima', '2026-05-01'],
    ['Id-ul-Zuha (Bakrid)', '2026-05-27'],
    ['Muharram', '2026-06-26'],
    ['Independence Day', '2026-08-15'],
    ['Milad-un-Nabi', '2026-08-26'],
    ['Janmashtami', '2026-09-04'],
    ['Mahatma Gandhi Jayanti', '2026-10-02'],
    ['Dussehra', '2026-10-20'],
    ['Maharshi Valmiki Birthday', '2026-10-26'],
    ['Diwali', '2026-11-09'],
    ['Guru Nanak Jayanti', '2026-11-24'],
    ['Christmas', '2026-12-25'],
  ],
};

// AP -> AP, TS/Telangana -> TS, anything else -> DEL (New Delhi)
export function holidayStateFor(empState) {
  const s = (empState || '').trim().toUpperCase();
  if (s === 'AP' || s === 'ANDHRA PRADESH') return 'AP';
  if (s === 'TS' || s === 'TG' || s === 'TELANGANA') return 'TS';
  return 'DEL';
}
