import { User } from '../app/models/user.model';

export const mockUsers: User[] = [
  {
    name: 'Emily Chen',
    password: 'securepass123',
    email: 'emilyc@example.com',
    phone: '6472839102',
    organizationName: 'Design Hub',
    organizationId: '003',
    designation: 'Senior Software Engineer',
    birthDate: new Date('1988-12-03'),
    city: 'Toronto',
    pincode: 'M5V 2T6',
  },
  {
    name: 'Carlos Rodriguez',
    password: 'strongpwd456',
    email: 'carlosr@example.com',
    phone: '3059876543',
    organizationName: 'Innovate Ltd.',
    organizationId: '002',
    designation: 'Team Lead',
    birthDate: new Date('1982-09-18'),
    city: 'Miami',
    pincode: '33101',
  },
  {
    name: 'Aisha Patel',
    password: 'aisha2023!',
    email: 'aishap@example.com',
    phone: '9876543210',
    organizationName: 'Tech Corp',
    organizationId: '001',
    designation: 'Project Manager',
    birthDate: new Date('1990-07-30'),
    city: 'Mumbai',
    pincode: '400001',
  },
  {
    name: 'Lucas Müller',
    password: 'deutschpwd789',
    email: 'lucasm@example.com',
    phone: '4915123456789',
    organizationName: 'Design Hub',
    organizationId: '003',
    designation: 'Software Engineer',
    birthDate: new Date('1995-04-22'),
    city: 'Berlin',
    pincode: '10115',
  },
  {
    name: 'Sophie Martin',
    password: 'frenchsecure321',
    email: 'sophiem@example.com',
    phone: '3360123456',
    organizationName: 'Innovate Ltd.',
    organizationId: '002',
    designation: 'Director',
    birthDate: new Date('1978-11-05'),
    city: 'Paris',
    pincode: '75001',
  },
];

export const allowedOrganizations = [
  { orgId: '001', orgName: 'Google' },
  { orgId: '002', orgName: 'JP Morgan' },
  { orgId: '003', orgName: 'Amazon' },
];

export const designations = [
  {
    id: '1',
    name: 'Junior Developer',
  },
  {
    id: '2',
    name: 'Full Stack Developer',
  },
  {
    id: '3',
    name: 'DevOps Engineer',
  },
  {
    id: '4',
    name: 'Product Owner',
  },
  {
    id: '5',
    name: 'Chief Technology Officer',
  },
];
