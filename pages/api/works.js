const works = [
  {
    _id: "link_1",
    icon: {
      path: "/icons/github.svg",
      width: 76
    },
    gradient: {
      from: "",
      to: ""
    },
    links: "https://github.com/JeksCorsa",
    title: "Мой личный GitHub"
  },
  {
    _id: "link_2",
    icon: {
      path: "/icons/github.svg",
      width: 76
    },
    gradient: {
      from: "",
      to: ""
    },
    link: "https://github.com/orgs/WerciDev",
    title: "GitHub моей организации"
  },
  {
    _id: "link_3",
    icon: {
      path: "/icons/vk.svg",
      width: 76
    },
    gradient: {
      from: "",
      to: ""
    },
    link: "https://vk.com/WerciDev",
    title: "Моя группа ВКонтакте"
  }
];

export default function handler(req, res) {
  res.status(200).json(works);
}
