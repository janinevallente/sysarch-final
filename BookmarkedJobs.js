import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

const BookmarkedJobs = ({ navigation, route }) => {
  const { bookmarkedJobs } = route.params;

  const jobData = [
    {
      id: '1',
      title: 'React Developer',
      company: 'HawodTech Solutions, Inc.',
      location: 'Cebu City',
      salary: 'PHP 80,000 a month',
      jobtype: 'Full time, Permanent',
    },
    {
      id: '2',
      title: 'Inside Sales Representative',
      company: 'MyRxGuard',
      location: 'Cebu City',
      salary: 'PHP 8,400 a week',
      jobtype: 'Full time',
    },
    {
      id: '3',
        title: 'Customer Service Email Associate',
        company: 'Holiday Factory Package Tour Operator Inc.',
        location: 'Cebu City',
        salary: 'PHP 20,000 - PHP 30,000 a month',
        jobtype: 'Full time',
    },
    // Add more job listings as needed
  ];

  const filteredBookmarkedJobs = jobData.filter((item) => bookmarkedJobs.includes(item.id));

  const renderJobItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.jobItem}
        onPress={() => navigation.navigate('JobDetails', { jobId: item.id })}
      >
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.jobCompany}>{item.company}</Text>
        <Text style={styles.jobLocation}>{item.location}</Text>
        <Text style={styles.jobDescription}>Salary: {item.salary}</Text>
        <Text style={styles.jobDescription}>Job Type: {item.jobtype}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bookmarked Jobs</Text>
      <FlatList
        data={filteredBookmarkedJobs}
        renderItem={renderJobItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>No bookmarked jobs found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#E5F5FF',
  padding: 16,
  },
  heading: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 16,
  },
  listContent: {
  flexGrow: 1,
  },
  jobItem: {
  backgroundColor: '#FFFFFF',
  borderRadius: 8,
  paddingHorizontal: 16,
  paddingVertical: 12,
  marginBottom: 16,
  elevation: 2,
  },
  jobTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  },
  jobCompany: {
  fontSize: 16,
  color: '#888',
  },
  jobLocation: {
  fontSize: 16,
  color: '#888',
  marginBottom: 8,
  },
  jobDescription: {
  fontSize: 16,
  color: '#888',
  fontWeight: 'bold',
  },
  emptyText: {
  fontSize: 16,
  textAlign: 'center',
  marginTop: 32,
  },
});

export default BookmarkedJobs;
