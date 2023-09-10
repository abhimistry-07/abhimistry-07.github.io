import React from "react";
import styled from "styled-components";
import GitHubCalendar from "react-github-calendar";

function GitHub() {
  return (
    <DIV id="github">
      <h1>Github streak stats</h1>
      {/* [![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=abhimistry-07&theme=radical)](https://git.io/streak-stats) */}
      <img
        id="github-streak-stats"
        src="https://github-readme-streak-stats.herokuapp.com?user=abhimistry-07&theme=radical"
        alt=""
      />
      <br />
      <img
        id="github-stats-card"
        src="https://github-readme-stats.vercel.app/api?username=abhimistry-07&theme=radical&hide_border=false&include_all_commits=false&count_private=false"
        alt=""
      />
      <br />
      <img
        src="https://github-contributor-stats.vercel.app/api?username=abhimistry-07&limit=5&theme=radical&combine_all_yearly_contributions=true"
        alt=""
      />
      <h1>Top Language</h1>
      <img
        id="github-top-langs"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=abhimistry-07&theme=radical"
        alt=""
      />
      <br />
      <div className="react-activity-calendar">
        <h1 style={{ marginTop: "50px" }}>Days I Code</h1>
        <GitHubCalendar
          style={{ margin: "auto", marginTop:"30px" }}
          username="abhimistry-07"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </div>
    </DIV>
  );
}

const DIV = styled.div`
  padding: 50px 0;

  img {
    margin-top: 20px;
  }

  img ~ h1 {
    margin-top: 50px;
  }
`;

export default GitHub;
