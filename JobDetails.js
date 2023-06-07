import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text} from "react-native";

const JobDetails = ({ route }) => {
  const { jobId } = route.params;

  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    // Simulating data fetching based on the jobId
    fetchJobDetails();
  }, []);

  const fetchJobDetails = () => {
    // Replace this with your actual data-fetching logic
    // You can make an API call or fetch the data from a database
    // Here, we are using the jobData array to find the job details by jobId
    const jobData = [
      {
        id: "1",
        title: "React Developer",
        company: "HawodTech Solutions, Inc.",
        location: "Cebu City",
        salary: "PHP 80,000 a month",
        jobtype: "Full time, Permanent",
        schedule: "8-hour shift, Monday to Friday",
        desc: "We are looking for a highly skilled software developer who is comfortable with both front and back-end programming. Full-stack developers are responsible for developing and designing front-end web architecture, ensuring the responsiveness of applications, and working alongside graphic designers for web design features, among other duties.",
        qualifications: [
          "Degree in Computer Science, IT, or related field",
          "Minimum 2 years of experience in full-stack development",
          "Proficiency in HTML, CSS, and JavaScript/Typescript",
          "Experience with ReactJS and NodeJS",
          "Familiarity with database technologies (MySQL, SQL Server, Oracle, MongoDB)",
          "Excellent verbal communication skills",
          "Strong problem-solving and organizational skills",
          "Attention to detail",
        ],
      },
      {
        id: "2",
        title: "Inside Sales Representative",
        company: "MyRxGuard",
        location: "Cebu City",
        salary: "PHP 8,400 a week",
        jobtype: "Full time",
        schedule: "8-hour shift, Monday to Friday",
        desc: "Under the direction of the Director of Operations, the Inside Sales Representative will serve as the principal point of contact with healthcare professionals for establishing new accounts. Responsibilities include identifying new leads, pitching prospective customers, and maintaining good customer relations. The primary goal is to increase the visibility and awareness of company services and products to maximize sales growth.",
        qualifications: [
          "Minimum 2-4 years of experience as an inside sales representative or similar role",
          "Sales experience in the pharmacy field preferred",
          "Experience with MS Office Suite",
          "Highly motivated and target-driven",
          "Familiarity with CRMs",
          "Excellent verbal and written communication skills",
        ],
      },
      {
        id: "3",
        title: "Customer Service Email Associate",
        company: "Holiday Factory Package Tour Operator Inc.",
        location: "Cebu City",
        salary: "PHP 20,000 - PHP 30,000 a month",
        jobtype: "Full time",
        schedule: "8-hour shift, flexible",
        desc: "We are looking for a diligent and reliable Customer Service Email Support Associate for our Customer Care Department. Responsibilities include resolving customer issues through written instructions, maintaining excellent customer service, and assisting with inquiries. If you have a passion for providing exceptional customer service and enjoy working in a dynamic travel company, we welcome you!",
        qualifications: [
          "High school diploma or equivalent",
          "Minimum 2 years of experience (experience in the travel industry/account is a plus)",
        ],
      },
      // Add more job listings as needed
    ];

    const fetchedJobDetails = jobData.find((job) => job.id === jobId);

    setJobDetails(fetchedJobDetails);
  };

  if (!jobDetails) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading job details...</Text>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{jobDetails.title}</Text>
      <Text style={styles.text}>{jobDetails.company}</Text>
      <Text style={styles.text}>{jobDetails.location}</Text>

      <Text style={styles.subheading}>Job Salary:</Text>
      <Text style={styles.text}>{jobDetails.salary}</Text>

      <Text style={styles.subheading}>Job Type:</Text>
      <Text style={styles.text}>{jobDetails.jobtype}</Text>

      <Text style={styles.subheading}>Shift and Schedule:</Text>
      <Text style={styles.text}>{jobDetails.schedule}</Text>

      <Text style={styles.subheading}>Job Description:</Text>
      <Text style={styles.text}>{jobDetails.desc}</Text>

      <Text style={styles.subheading}>Qualifications:</Text>
      {jobDetails.qualifications.map((qualification, index) => (
        <Text key={index} style={styles.bullet}>
          • {qualification}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5F5FF",
    padding: 16,
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  bullet: {
    fontSize: 16,
    marginBottom: 4,
    marginLeft: 16,
  },
});

export default JobDetails;
