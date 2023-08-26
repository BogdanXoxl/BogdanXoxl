const LINKS = {
  rank: "https://git-profile-stats.vercel.app/api?rank_icon=github&show_icons=true&hide=&count_private=true&title_color=3382ed&text_color=ffffff&icon_color=f97316&bg_color=0f172a&hide_border=true&show_icons=true",
  langs:
    "https://git-profile-stats.vercel.app/api/top-langs/?langs_count=5&title_color=3382ed&text_color=ffffff&icon_color=84cc16&bg_color=0f172a&hide_border=true&locale=en&custom_title=Top%20%Languages&layout=donut-vertical&hide=lua",
  streak:
    "https://github-readme-streak-stats.herokuapp.com/?user=BogdanXoxl&stroke=facc15&background=0f172a&ring=ef4444&fire=ef4444&currStreakNum=facc15&currStreakLabel=ef4444&sideNums=facc15&sideLabels=facc15&dates=facc15&hide_border=true",
};

async function fn() {
  const start_time = new Date();

  for (const key in LINKS) {
    fetch(LINKS[key])
      .then((res) => {
        if (res.status === 200) {
          console.log(
            `${key} (${Date.now() - start_time}ms): ${res.statusText}`
          );
        }
      })
      .catch((e) => console.log(e));
  }
}

fn();
