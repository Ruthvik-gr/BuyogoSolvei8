# BuyogoSolvei8

## Overview
This project is an Angular web application that allows users to log in or sign up. It includes validations for user credentials and dynamically renders fields based on user input. The application uses mock data for user authentication and form handling and follows best practices such as routing, state management (RxJS + NgRx), and modular code structure.

## Features
1. **Login Screen**:
   - Enter email/phone number.
   - If the user exists, prompt for password and validate login credentials.
   - On successful login, display a success modal.
   - On failure, show an inline error message.
   
2. **Sign-up Screen** (Two-step process):
   - Step 1: Enter Name, Email/Phone, and Create Password.
   - Step 2: Enter organization, designation, birth date, city, and pincode. (Validations included).
   - Validation: Check if the organization exists in the allowed organizations list.

3. **State Management**:
   - Using NgRx for managing state and RxJS for handling asynchronous data.


## Getting Started

### Prerequisites
- Node.js (v14.x or higher)
- Angular CLI (v12.x or higher)

### Installation
1. Install the dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   ng serve
   ```

   The application will be running at `http://localhost:4200/`.


## State Management
This application uses NgRx to manage the global state. The data for the login and sign-up process is stored in NgRx stores and persists across components. RxJS is used to handle observables for asynchronous operations such as form submission.

## Mock Data
The application uses mock data for user authentication and allowed organizations. 

```json
[
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


  { orgId: '001', orgName: 'Google' },
  { orgId: '002', orgName: 'JP Morgan' },
  { orgId: '003', orgName: 'Amazon' },
]
```

## Validations
The application includes the following validations:
- **Login**: Validate email/phone number and password.
- **Sign-up**: Validate email/phone number, name, password, organization, designation, birth date, city, and pincode.
- **Organization Validation**: Ensure that the organization selected exists in the mock organization list.
- **Pincode Validation**: Check that the pincode contains exactly 6 digits.

