import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const JobListingScreen = ({ navigation }) => {
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

  const [searchKeyword, setSearchKeyword] = useState('');
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  const toggleBookmark = (itemId) => {
    if (bookmarkedJobs.includes(itemId)) {
      setBookmarkedJobs(bookmarkedJobs.filter((id) => id !== itemId));
    } else {
      setBookmarkedJobs([...bookmarkedJobs, itemId]);
    }
  };

  const renderJobItem = ({ item }) => {
    const isBookmarked = bookmarkedJobs.includes(item.id);

    const handleApplyNow = () => {
      // This function will be called when the button is pressed
      console.log('Apply Now clicked for job ID:', item.id);
    };

    return (
      <View style={styles.jobItem}>
        <View style={styles.jobHeader}>
          <Text style={styles.jobTitle}>{item.title}</Text>
          <TouchableOpacity onPress={() => toggleBookmark(item.id)}>
            <Icon
              name={isBookmarked ? 'bookmark' : 'bookmark-o'}
              size={24}
              color={isBookmarked ? '#FFAA00' : '#CCCCCC'}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.jobCompany}>{item.company}</Text>
        <Text style={styles.jobLocation}>{item.location}</Text>
        <Text style={styles.jobDescription}>Salary: {item.salary}</Text>
        <Text style={styles.jobDescription}>Job Type: {item.jobtype}</Text>

        <TouchableOpacity style={styles.applyNowButton} onPress={handleApplyNow}>
          <Text style={styles.applyNowButtonText}>Apply Now</Text>
        </TouchableOpacity>

      </View>
    );
  };

  const filteredJobData = jobData.filter((item) =>
    item.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const navigateToBookmarkedJobs = () => {
    navigation.navigate('BookmarkedJobs', { bookmarkedJobs });
  };

  const logout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  const renderNoResultsFound = () => {
    if (filteredJobData.length === 0 && searchKeyword !== '') {
      return (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>No results found for "{searchKeyword}"</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search job title..."
        onChangeText={(text) => setSearchKeyword(text)}
        value={searchKeyword}
      />
      {renderNoResultsFound()}
      <FlatList
        data={filteredJobData}
        renderItem={renderJobItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.viewBookmarkedButton} onPress={navigateToBookmarkedJobs}>
        <Text style={styles.viewBookmarkedButtonText}>View Bookmarked Jobs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Icon name="sign-out" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F5FF',
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ADD8E6',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  jobItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    elevation: 2,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  jobCompany: {
    fontSize: 16,
    color: '#888888',
  },
  jobLocation: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 8,
  },
  jobDescription: {
    fontSize: 16,
    color: '#888888',
    fontWeight: 'bold',
  },
  viewBookmarkedButton: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    paddingVertical: 12,
    marginBottom: 16,
  },
  viewBookmarkedButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  applyNowButton: {
    backgroundColor: '#007bff',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 8,
    width: 200,
  },
  applyNowButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  noResultsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  noResultsText: {
    fontSize: 16,
    color: '#888888',
  },
  logoutButton: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default JobListingScreen;
