# St. Louis Clinic Management System

## Description
The **St. Louis Clinic Management System** is a comprehensive web application built to manage clinic operations, including patient records, appointments, and provider services. It uses a microservices architecture, with separate services handling patients, appointments, and providers, ensuring scalability and flexibility in deployment.

The application includes both a **React.js** front-end for user interaction and an **ASP.NET Core** back-end for handling business logic and database interactions.

## Features
- **Patient Management**: Add, edit, and view patient records.
- **Appointment Booking**: Book, update, and manage patient appointments with providers.
- **Provider Services**: Manage provider availability and details.
- **Role-Based Access Control**: Role-specific functionalities to ensure secure access to different parts of the system.
- **RESTful APIs**: Secure APIs for patient, appointment, and provider management.
- **Centralized Logging & Error Handling**: Monitor system performance and log errors using Azure Application Insights.
- **Cloud Deployment**: Fully deployed to Azure with CI/CD pipelines for automated deployments.

## Technologies Used
- **Frontend**: React.js, HTML5, CSS3, Bootstrap
- **Backend**: ASP.NET Core, Entity Framework Core
- **Database**: PostgreSQL hosted on Azure
- **Cloud Services**: Azure App Service, Azure Static Web Apps, Azure Application Insights
- **Version Control**: Git, GitHub

## Setup Instructions

### Prerequisites
- **Node.js** and **npm** for the front-end.
- **.NET 6 SDK** for the back-end.
- **PostgreSQL** for the database.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/username/clinic-management-system.git
2. Navigate to the project directory:
   cd clinic-management-system
3. Install dependencies for both the frontend and backend:
    Frontend (React):
      cd Frontend
      npm install
    Backend (ASP.NET Core):
      cd Backend
      dotnet restore
4. Configure the database: Ensure PostgreSQL is running locally or configure it with your connection string:
    "ConnectionStrings": {
       "DefaultConnection": "Host=localhost;Database=clinicdb;Username=postgres;Password=yourpassword;"
    }
5. Run the application:
    Frontend:
      cd Frontend
      npm start
    Backend:
      cd Backend
      dotnet run
6. Access the app:
    Frontend: Open your browser and go to http://localhost:3000.
    Backend: The backend APIs will be available at http://localhost:5000.

Live Demo
Check out the live demo hosted on Azure: St. Louis Clinic Management System Link: https://brave-mud-0f3647a0f.5.azurestaticapps.net/

##Screenshots

### Home Page
![HomePage Screensot](https://github.com/rconcellado/StLouisClinic/blob/main/2024-09-26%2019_55_17-.png?raw=true)

## Patient List
![PatientList Screenshot](https://github.com/rconcellado/StLouisClinic/blob/main/2024-09-26%2020_05_00-.png?raw=true)

## Provider List
![ProviderList Screenshot](https://github.com/rconcellado/StLouisClinic/blob/main/2024-09-26%2020_10_51-.png?raw=true)

Logging & Error Monitoring
This system uses Azure Application Insights for centralized logging and error tracking. Performance metrics, logs, and errors can be monitored in real-time through the Azure portal.

Continuous Integration/Continuous Deployment (CI/CD)
CI/CD pipelines are configured using GitHub Actions to automate testing, building, and deploying changes to Azure. Every push to the main branch triggers a deployment to production.

Contribution Guidelines
If you’d like to contribute to this project:

Fork the repository.
Create a feature branch: git checkout -b feature/YourFeatureName.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature/YourFeatureName.
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or support, feel free to reach out:

Email: rey.concellado@gmail.com
LinkedIn: Reynaldo Concellado

### Key Sections Included:
- **Project Description**: Overview of what the project does and its purpose.
- **Features**: A breakdown of the main functionalities.
- **Technologies Used**: The tech stack for both frontend and backend.
- **Setup Instructions**: Steps to clone, set up, and run the project locally.
- **Live Demo**: Link to the live demo deployed on Azure.
- **Screenshots**: Placeholder for screenshots showcasing the application UI.
- **Logging & CI/CD**: Information about how logging and automated deployments are set up.
- **Contributions**: How other developers can contribute.
- **Contact Information**: How to reach you for collaboration or inquiries.
