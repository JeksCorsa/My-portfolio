const me = {
  siteName: "Balggfgghf",
  avatar: "/avatar.jpeg",
  description:
    "<p>Меня зовут Коля, я начинающий Web разработчик.</p>" +
    "<p>Сейчас учусь верстать на HTML. Паралельно обучаюсь новому.</p>" +
    "<p>Основная миссия – создавать крутые продукты, которые будут помогать людям и менять мир. Спасибо 😺</p>"
};

export default function handler(req, res) {
  res.status(200).json(me);
}
