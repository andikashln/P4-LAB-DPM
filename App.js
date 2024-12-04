import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Team from './src/components/Team';
import { globalStyles } from './src/styles/globalStyles';

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const teamA = 'Tim A';
  const teamB = 'Tim B';

  const increaseScore = (team) => {
    if (team === 'A') {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) {
        alert(`${teamA} Menang!`);
      }
    } else {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) {
        alert(`${teamB} Menang!`);
      }
    }
  };

  const decreaseScore = (team) => {
    if (team === 'A') {
      setScoreA(Math.max(0, scoreA - 1));
    } else {
      setScoreB(Math.max(0, scoreB - 1));
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Skor Pertandingan Futsal ⚽</Text>
      <View style={styles.teamContainer}>
        <Team
          name={teamA}
          score={scoreA}
          onIncrease={() => increaseScore('A')}
          onDecrease={() => decreaseScore('A')}
        />
        <Team
          name={teamB}
          score={scoreB}
          onIncrease={() => increaseScore('B')}
          onDecrease={() => decreaseScore('B')}
        />
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset Pertandingan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  resetButton: {
    backgroundColor: '#444',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
    borderColor: '#FFD700',
    borderWidth: 2,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default App;
