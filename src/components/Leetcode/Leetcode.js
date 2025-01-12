import React, { useEffect, useState } from "react";

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch("https://leetcode-stats-api.herokuapp.com/Shivang11");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        if (data.status === "success") {
          setStats(data);
        } else {
          throw new Error(data.message || "Failed to fetch LeetCode stats.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  if (loading) {
    return <div className="loading" style={styles.container}>Loading LeetCode stats...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Leetcode Statistics</h1>
      {stats && (
        <>
          {/* Main Card */}
          <div style={styles.mainCard}>
            <div style={styles.mainCardText}>
              <h2 style={styles.mainStat}>{stats.totalSolved} / {stats.totalQuestions}</h2>
              <p style={styles.subText}>Total Solved</p>
            </div>
            <div style={styles.solvedText}>
              <p style={styles.solvedStatus}>
                <span style={{ color: "#4CAF50" }}>✔ Solved</span>
              </p>
            </div>
          </div>

          {/* Cards for Easy, Medium, and Hard */}
          <div style={styles.cardContainer}>
            {/* Easy Card */}
            <div style={styles.statCard}>
              <h3 style={{ ...styles.cardTitle, color: "#00D8FF" }}>Easy</h3>
              <p style={styles.cardStat}>
                {stats.easySolved} / {stats.totalEasy}
              </p>
            </div>

            {/* Medium Card */}
            <div style={styles.statCard}>
              <h3 style={{ ...styles.cardTitle, color: "#FFC107" }}>Medium</h3>
              <p style={styles.cardStat}>
                {stats.mediumSolved} / {stats.totalMedium}
              </p>
            </div>

            {/* Hard Card */}
            <div style={styles.statCard}>
              <h3 style={{ ...styles.cardTitle, color: "#F44336" }}>Hard</h3>
              <p style={styles.cardStat}>
                {stats.hardSolved} / {stats.totalHard}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Inline styles with responsiveness
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  header: {
        position: "relative",
        fontSize: "36px",
        marginBottom: "40px",
        animation: "fadeIn 1s ease"
},
  mainCard: {
    backgroundColor: "#2a2929",
    color: "white",
    padding: "30px 40px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
    maxWidth: "500px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
    marginBottom: "20px",
  },
  mainCardText: {
    display: "flex",
    flexDirection: "column",
  },
  mainStat: {
    margin: 0,
    fontSize: "30px",
  },
  subText: {
    margin: 0,
    fontSize: "16px",
  },
  solvedText: {
    textAlign: "right",
  },
  solvedStatus: {
    margin: 0,
    fontSize: "28px",
  },
  attemptingText: {
    margin: 0,
    fontSize: "14px",
    color: "#CCCCCC",
  },
  cardContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "70%",
  },
  statCard: {
    backgroundColor: "#2a2929",
    padding: "20px 30px",
    borderRadius: "15px",
    textAlign: "center",
    width: "100px",
    flex: "1 1 30%",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
  },
  cardTitle: {
    margin: 0,
    fontSize: "18px",
    marginBottom: "10px",
  },
  cardStat: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default LeetCodeStats;
