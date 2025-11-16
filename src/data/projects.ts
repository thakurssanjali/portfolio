export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  github?: string;
  live?: string;
  image?: string;
  tags: string[];
}

export const projects: Project[] = [
 {
  id: 1,
  title: 'Bike Rental Management System',
  description: 'Full-stack bike rental platform with online bookings, payments, and an admin dashboard.',
  longDescription:
    'A complete bike rental management system built using React, Node.js, Express, and MongoDB. The platform allows users to browse bikes, make reservations, and complete secure payments via Card, UPI, and COD. It includes dual-role authentication (User/Admin), a damage reporting module, and real-time maintenance tracking. The admin dashboard enables efficient management of bikes, users, and repair workflows. Enhanced with dark/light themes and SSL-based security for safe encrypted communication.',
  technologies: [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Tailwind CSS',
    'JWT Auth'
  ],
  github: 'https://github.com',
  live: 'https://example.com',
  tags: ['Full Stack', 'React', 'Node', 'Dashboard'],
},
{
  id: 2,
  title: 'Dice Game Simulator (Java Edition)',
  description: 'Interactive Java-based multiplayer dice game with a graphical user interface.',
  longDescription:
    'A desktop-based dice game developed using Java Swing, supporting multiple players with engaging, round-based gameplay. Implements core game mechanics including real-time tie detection, win tracking, randomized dice roll logic, and multi-round support. The project features a clean and intuitive GUI for a smooth user experience and is packaged as a runnable .jar file for seamless cross-platform execution without additional setup.',
  technologies: ['Java', 'Swing', 'OOP', 'JAR Packaging'],
  github: 'https://github.com',
  live: '',
  tags: ['Java', 'Game Development', 'Desktop App'],
},

 
];
