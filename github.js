class GitHub {
  constructor() {
    this.client_id = 'ec207fff6f4d75bd5556';
    this.client_secret = 'c572546289ee0c48d983eecb0af103208a5612a8';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    const profile = await profileData.json();

    return {
      profile: profile
    }
  }
}