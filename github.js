class Github {
  constructor() {
    this.client_id = 'ec207fff6f4d75bd5556';
    this.client_secret = 'c572546289ee0c48d983eecb0af103208a5612a8';
    this.repos_count = 5;
    this.repos_sort = 'craeted: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}$sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile: profile,
      repos: repos
    }
  }
}
