const CARD_TYPES = {
  warmup: { label: "разогрев" },
  meme: { label: "мемный суд" },
  school: { label: "школьный лор" },
  cringe: { label: "кринж или база" },
  alpaca: { label: "альпака меняет правило" },
};

const CARDS = [
  { type: "warmup", text: "за 30 секунд придумайте честное название этой вечеринки, если бы его писал человек после трёх неловких пауз." },
  { type: "warmup", text: "какая фраза в чате сразу выдаёт человека, который ничего не понял, но хочет выглядеть занятым?" },
  { type: "warmup", text: "придумайте самый подозрительный комплимент, который звучит нормально только первые две секунды." },
  { type: "warmup", text: "что можно сказать вместо «я не игнорю», чтобы стало ещё хуже?" },
  { type: "warmup", text: "какой предмет в комнате выглядит так, будто видел слишком много и молчит из принципа?" },
  { type: "warmup", text: "придумайте девиз команды, который звучит уверенно, но по факту ничего не обещает." },
  { type: "warmup", text: "какое сообщение в групповом чате должно автоматически включать тревожную музыку?" },
  { type: "warmup", text: "назовите ситуацию, где человек говорит «мне всё равно», но уже проиграл внутренний суд." },
  { type: "warmup", text: "придумайте титул человеку, который всегда говорит «я сейчас», но живёт в другом часовом поясе." },
  { type: "warmup", text: "какую фразу надо запретить на 24 часа, потому что она слишком часто спасает слабые ответы?" },

  { type: "meme", text: "придумайте подпись к фото: человек открыл чат, увидел 127 сообщений и выбрал духовное исчезновение." },
  { type: "meme", text: "какая подпись к человеку, который сказал «я сделал почти всё», но «почти» занимает 98 процентов работы?" },
  { type: "meme", text: "придумайте мем про человека, который ставит реакцию вместо ответа и считает, что закрыл вопрос." },
  { type: "meme", text: "какой заголовок у новости: «командный проект впервые не закончился пассивной агрессией»?" },
  { type: "meme", text: "придумайте подпись к моменту, когда кто-то начинает рассказ словами «короче, там сложно»." },
  { type: "meme", text: "какой мем описывает человека, который открыл тетрадь на первой странице и сразу устал?" },
  { type: "meme", text: "придумайте название фильма про человека, который ушёл «на минуту» и вернулся в другой эпохе." },
  { type: "meme", text: "какая подпись к лицу человека, который понял шутку позже всех, но смеётся громче всех?" },
  { type: "meme", text: "придумайте мем про фразу «давайте без драмы», после которой драма получает бюджет и продюсера." },
  { type: "meme", text: "какой статус у человека, который пишет «неважно», но уже готовит презентацию на 40 слайдов?" },

  { type: "school", text: "защитите позицию: групповая работа — это не формат обучения, а социальный эксперимент без этического комитета." },
  { type: "school", text: "придумайте максимально приличную формулировку для «я вообще не понял, что мы сейчас сдаём»." },
  { type: "school", text: "какая школьная фраза звучит безобидно, но на самом деле означает катастрофу?" },
  { type: "school", text: "команда объясняет, почему опоздание — это не провал, а драматургически точное появление." },
  { type: "school", text: "какой тип человека в групповом проекте опаснее: молчун, контролёр или «я потом добавлю»? защитите выбор." },
  { type: "school", text: "придумайте честное описание урока, где все кивают, но никто не забрал смысл с собой." },
  { type: "school", text: "выберите школьный момент, после которого класс коллективно делает вид, что ничего не произошло." },
  { type: "school", text: "какое сообщение от учителя в чате выглядит как обычное, но ломает весь вечер?" },
  { type: "school", text: "придумайте номинацию для человека, который узнаёт о контрольной в момент её раздачи." },
  { type: "school", text: "какую школьную привычку взрослые называют ответственностью, а все остальные — тревожным симптомом?" },

  { type: "cringe", text: "писать «можно вопрос?» и исчезать на 12 минут: кринж или база? защищайте как адвокаты с плохим делом." },
  { type: "cringe", text: "отправить голосовое на 5 минут, где полезного 8 секунд: кринж или база?" },
  { type: "cringe", text: "говорить «я без негатива», а дальше выпускать маленький токсичный доклад: кринж или база?" },
  { type: "cringe", text: "делать вид, что не увидел сообщение, хотя все видели, что ты онлайн: кринж или база?" },
  { type: "cringe", text: "начать спор с «мне вообще всё равно» и спорить до моральной победы: кринж или база?" },
  { type: "cringe", text: "писать «ахах» без единой эмоции в душе: кринж или база?" },
  { type: "cringe", text: "говорить «я быстро» и только после этого начинать собираться: кринж или база?" },
  { type: "cringe", text: "ставить точку в конце короткого сообщения, чтобы все почувствовали холод: кринж или база?" },
  { type: "cringe", text: "сказать «ладно» так, что разговор официально умер: кринж или база?" },
  { type: "cringe", text: "включить режим эксперта после одного тиктока на тему: кринж или база?" },

  { type: "alpaca", text: "альпака меняет правило: ответ должен звучать как оправдание человека, которого поймали, но он всё ещё уверен." },
  { type: "alpaca", text: "альпака требует токсичной дипломатии: скажите максимально жёсткий ответ максимально вежливым тоном." },
  { type: "alpaca", text: "альпака забрала кислород: ответ должен быть не длиннее пяти слов. если смешно — +1, если гениально — +2." },
  { type: "alpaca", text: "альпака включила режим суда: одна команда обвиняет, другая защищает. победителя выбирают остальные." },
  { type: "alpaca", text: "альпака любит риск: если команда отвечает за 15 секунд и не несёт чушь — можно взять +2." },
  { type: "alpaca", text: "альпака запрещает нормальность: ответ должен начинаться с «официальная версия такая…»." },
  { type: "alpaca", text: "альпака требует улику: перед ответом покажите предмет рядом и объясните, почему он доказывает вашу правоту." },
  { type: "alpaca", text: "альпака режет пафос: самый уверенный участник команды молчит, финальный ответ даёт кто-то другой." },
  { type: "alpaca", text: "альпака открыла режим комментариев: после ответа другая команда может задать один неприятный, но честный вопрос." },
  { type: "alpaca", text: "альпака объявляет блиц: если ответ заставил хотя бы двух человек вслух сказать «жиза», команда получает +2." },
];

const STORAGE_KEY = "sonya-level-17-state";
const screens = {
  start: document.querySelector("#start-screen"),
  setup: document.querySelector("#setup-screen"),
  game: document.querySelector("#game-screen"),
  finish: document.querySelector("#finish-screen"),
};

const state = loadState();
let timerId = null;
let timerTotal = state.timerTotal;
let timerLeft = state.timerTotal;
let timerRunning = false;

const els = {
  roundLabel: document.querySelector("#round-label"),
  teamLabel: document.querySelector("#team-label"),
  scoreLabel: document.querySelector("#score-label"),
  cardType: document.querySelector("#card-type"),
  cardText: document.querySelector("#card-text"),
  timerLabel: document.querySelector("#timer-label"),
  timerFill: document.querySelector("#timer-fill"),
  finishScore: document.querySelector("#finish-score"),
  finishCopy: document.querySelector("#finish-copy"),
};

init();

function init() {
  if (!state.deck.length) {
    state.deck = shuffle(CARDS.map((_, index) => index));
  }

  document.addEventListener("click", handleClick);
  updateTeamButtons();
  updateRoundButtons();
  updateTimerButtons();
  render();
}

function handleClick(event) {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.team) {
    state.team = Number(target.dataset.team);
    updateTeamButtons();
    saveState();
    render();
    return;
  }

  if (target.dataset.rounds) {
    state.totalRounds = Number(target.dataset.rounds);
    updateRoundButtons();
    saveState();
    render();
    return;
  }

  if (target.dataset.time) {
    setTimer(Number(target.dataset.time));
    return;
  }

  const action = target.dataset.action;
  if (!action) return;

  if (action === "start") show("setup");
  if (action === "play") startGame();
  if (action === "next") nextCard();
  if (action === "plus") updateScore(1);
  if (action === "minus") updateScore(-1);
  if (action === "timer-toggle") toggleTimer(target);
  if (action === "again") resetGame();
  if (action === "reset") resetAll();
  if (action === "home") goHome();
}

function startGame() {
  state.round = 1;
  state.score = 0;
  state.currentCard = drawCardIndex();
  setTimer(timerTotal);
  show("game");
  saveState();
  render();
}

function nextCard() {
  stopTimer();

  if (state.round >= state.totalRounds) {
    show("finish");
    saveState();
    render();
    return;
  }

  state.round += 1;
  state.currentCard = drawCardIndex();
  setTimer(timerTotal);
  saveState();
  render();
}

function updateScore(delta) {
  state.score = Math.max(0, state.score + delta);
  saveState();
  render();
}

function resetGame() {
  state.screen = "setup";
  state.round = 1;
  state.score = 0;
  state.currentCard = null;
  state.deck = shuffle(CARDS.map((_, index) => index));
  stopTimer();
  setTimer(45);
  saveState();
  show("setup");
  render();
}

function goHome() {
  state.screen = "setup";
  state.round = 1;
  state.score = 0;
  state.currentCard = null;
  state.deck = shuffle(CARDS.map((_, index) => index));
  stopTimer();
  setTimer(45);
  saveState();
  show("setup");
  render();
}

function resetAll() {
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(state, defaultState());
  stopTimer();
  setTimer(45);
  updateTeamButtons();
  updateRoundButtons();
  saveState();
  show("start");
  render();
}

function drawCardIndex() {
  if (!state.deck.length) {
    state.deck = shuffle(CARDS.map((_, index) => index));
  }

  const index = state.deck.shift();
  state.used.push(index);
  return index;
}

function show(screenName) {
  state.screen = screenName;
  Object.entries(screens).forEach(([name, screen]) => {
    screen.classList.toggle("screen-active", name === screenName);
  });
  saveState();
}

function render() {
  show(state.screen);
  els.roundLabel.textContent = `${state.round}/${state.totalRounds}`;
  els.teamLabel.textContent = String(state.team);
  els.scoreLabel.textContent = String(state.score);
  els.finishScore.textContent = String(state.score);

  const card = CARDS[state.currentCard] || CARDS[0];
  const meta = CARD_TYPES[card.type];
  els.cardType.textContent = meta.label;
  els.cardText.textContent = card.text;
  els.finishCopy.textContent = finishText(state.score);
  renderTimer();
}

function setTimer(seconds) {
  stopTimer();
  timerTotal = seconds;
  timerLeft = seconds;
  state.timerTotal = seconds;
  updateTimerButtons();
  saveState();
  renderTimer();
}

function toggleTimer(button) {
  if (timerRunning) {
    stopTimer();
    button.textContent = "старт";
    return;
  }

  timerRunning = true;
  button.textContent = "пауза";
  timerId = window.setInterval(() => {
    timerLeft = Math.max(0, timerLeft - 1);
    renderTimer();
    if (timerLeft <= 0) {
      stopTimer();
      button.textContent = "старт";
    }
  }, 1000);
}

function stopTimer() {
  timerRunning = false;
  window.clearInterval(timerId);
  const toggle = document.querySelector('[data-action="timer-toggle"]');
  if (toggle) toggle.textContent = "старт";
}

function renderTimer() {
  els.timerLabel.textContent = String(timerLeft);
  const percent = timerTotal ? (timerLeft / timerTotal) * 100 : 0;
  els.timerFill.style.width = `${percent}%`;
}

function updateTeamButtons() {
  document.querySelectorAll("[data-team]").forEach((button) => {
    const selected = Number(button.dataset.team) === state.team;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-checked", String(selected));
  });
}

function updateRoundButtons() {
  document.querySelectorAll("[data-rounds]").forEach((button) => {
    const selected = Number(button.dataset.rounds) === state.totalRounds;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-checked", String(selected));
  });
}

function updateTimerButtons() {
  document.querySelectorAll("[data-time]").forEach((button) => {
    button.classList.toggle("selected", Number(button.dataset.time) === timerTotal);
  });
}

function finishText(score) {
  if (score >= 5) return "команда прошла карту почти без потерь. подозрительно эффективно.";
  if (score >= 3) return "партия закрыта. уровень 17 открыт, протокол хаоса принят.";
  return "главное не счёт. главное, что карта выдержала этот маршрут.";
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultState(), ...saved };
  } catch {
    return defaultState();
  }
}

function defaultState() {
  return {
    screen: "start",
    team: 1,
    totalRounds: 5,
    round: 1,
    score: 0,
    currentCard: null,
    deck: [],
    used: [],
    timerTotal: 45,
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}
