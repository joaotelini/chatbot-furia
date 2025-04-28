import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_URL = process.env.API_URL;

export async function getPlayer(player) {
  try {
    const response = await axios.get(`${API_URL}/api/player/${player}`);
    const playerData = response.data;
    return playerData;
  } catch (error) {
    console.error("Error fetching player data:", error);
    return null;
  }
}

export async function getRoster() {
  try {
    const response = await axios.get(`${API_URL}/api/roster`);
    const rosterData = response.data;
    return rosterData;
  } catch (error) {
    console.error("Error fetching roster data:", error);
    return null;
  }
}

export async function getNextMatch() {
  try {
    const response = await axios.get(`${API_URL}/api/nextmatch`);
    const matchData = response.data;
    return matchData;
  } catch (error) {
    console.error("Error fetching next match data:", error);
    return null;
  }
}

export async function getResults() {
  try {
    const response = await axios.get(`${API_URL}/api/results`);
    const resultsData = response.data;
    return resultsData;
  } catch (error) {
    console.error("Error fetching results data:", error);
    return null;
  }
}
