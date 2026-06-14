const CARD_TYPES = {
  warmup: { label: "разогрев" },
  meme: { label: "мемный суд" },
  school: { label: "школьный лор" },
  cringe: { label: "норм или перебор" },
  alpaca: { label: "альпака меняет правило" },
};

const CARDS = [
  { type: "warmup", text: "придумайте название этой вечеринки, если бы она была приложением из 2016 года." },
  { type: "warmup", text: "какая фраза в чате сразу выдаёт человека, который ничего не понял?" },
  { type: "warmup", text: "что можно сказать вместо «я не игнорю», чтобы стало только подозрительнее?" },
  { type: "warmup", text: "выберите предмет рядом и объявите его главным артефактом вечера." },
  { type: "warmup", text: "придумайте девиз команды, который звучит уверенно, но ничего не обещает." },
  { type: "warmup", text: "какое сообщение в общем чате должно включать тревожную музыку?" },
  { type: "warmup", text: "какая ситуация выглядит как «мне всё равно», но внутри уже идёт суд?" },
  { type: "warmup", text: "придумайте титул человеку, который говорит «я сейчас» и исчезает." },
  { type: "warmup", text: "какую фразу надо запретить на вечер, потому что она спасает слабые ответы?" },
  { type: "warmup", text: "какой звук должен играть, когда кто-то приходит «вовремя», но на 40 минут позже?" },
  { type: "warmup", text: "придумайте честный статус для человека с 4 процентами батареи и большими планами." },
  { type: "warmup", text: "какое слово лучше всего описывает момент, когда все делают вид, что поняли?" },
  { type: "warmup", text: "какое правило этой вечеринки надо записать на салфетке и нарушить через минуту?" },
  { type: "warmup", text: "назовите вещь, которая всегда нужна всем именно тогда, когда её нет." },
  { type: "warmup", text: "какой человек на вечеринке заслуживает отдельную кнопку «пропустить заставку»?" },
  { type: "warmup", text: "придумайте худшее, но технически вежливое начало сообщения." },
  { type: "warmup", text: "какой план звучит отлично, пока не надо реально вставать и идти?" },
  { type: "warmup", text: "назовите главный навык выживания в групповом чате." },
  { type: "warmup", text: "придумайте название для паузы, когда все смотрят в телефоны, но это типа общение." },
  { type: "warmup", text: "какая мелочь моментально делает человека подозрительно взрослым?" },

  { type: "meme", text: "придумайте подпись: человек открыл чат, увидел 127 сообщений и выбрал исчезнуть." },
  { type: "meme", text: "подпись к фото: «я сделал почти всё», но почти — это вся работа." },
  { type: "meme", text: "мем про человека, который ставит реакцию вместо ответа и считает вопрос закрытым." },
  { type: "meme", text: "заголовок новости: «командный проект впервые не закончился пассивной агрессией»." },
  { type: "meme", text: "подпись к фразе «короче, там сложно», после которой проще уже не будет." },
  { type: "meme", text: "название фильма про человека, который ушёл «на минуту» и вернулся в другой эпохе." },
  { type: "meme", text: "мем про «давайте без драмы», после чего драма получает бюджет." },
  { type: "meme", text: "статус человека, который пишет «неважно», но уже готовит речь." },
  { type: "meme", text: "подпись к моменту, когда ты случайно открыл фронталку." },
  { type: "meme", text: "название сериала про поиск зарядки в гостях." },
  { type: "meme", text: "мем про человека, который понял шутку позже всех, но смеётся увереннее всех." },
  { type: "meme", text: "подпись к фото: «я нормально объясняю», а у всех лица как после ребуса." },
  { type: "meme", text: "название песни для момента, когда учитель сказал «это не контрольная», но листочки уже раздают." },
  { type: "meme", text: "мем про человека, который пишет «ок», и всем сразу холодно." },
  { type: "meme", text: "подпись к ситуации: «мы просто посидим спокойно», через десять минут." },
  { type: "meme", text: "название фильма ужасов про телефон на 1 проценте и дорогу домой." },
  { type: "meme", text: "мем про человека, который выбирает песню дольше, чем она потом играет." },
  { type: "meme", text: "подпись к фото: «я не спорю», но спор уже идёт третий раунд." },
  { type: "meme", text: "название документалки про человека, который сказал «я быстро»." },
  { type: "meme", text: "мем про групповой чат, где все онлайн, но никто не отвечает." },

  { type: "school", text: "защитите тезис: групповая работа — это проверка дружбы, а не знаний." },
  { type: "school", text: "прилично переведите фразу: «я вообще не понял, что мы сдаём»." },
  { type: "school", text: "какая школьная фраза звучит спокойно, но означает катастрофу?" },
  { type: "school", text: "докажите, что опоздание — это драматургически точное появление." },
  { type: "school", text: "кто опаснее в проекте: молчун, контролёр или «я потом добавлю»?" },
  { type: "school", text: "придумайте честное описание урока, где все кивают, но никто не понял." },
  { type: "school", text: "какой школьный момент заставляет класс делать вид, что ничего не произошло?" },
  { type: "school", text: "какое сообщение от учителя в чате ломает весь вечер?" },
  { type: "school", text: "номинация для человека, который узнаёт о контрольной в момент её раздачи." },
  { type: "school", text: "какую школьную привычку взрослые называют ответственностью, а остальные — тревогой?" },
  { type: "school", text: "придумайте худшую, но правдоподобную тему для презентации на завтра." },
  { type: "school", text: "какой предмет в школе звучит нормально, пока не начинается домашка?" },
  { type: "school", text: "выберите худшее: устный ответ, внезапный тест или «работаем в парах»." },
  { type: "school", text: "придумайте официальное название для списывания, чтобы звучало как наука." },
  { type: "school", text: "какой человек в классе должен вести переговоры с учителями?" },
  { type: "school", text: "что страшнее: пустой дневник, полный чат или фраза «открываем тетради»?" },
  { type: "school", text: "придумайте школьное правило, которое все знают, но никто не видел написанным." },
  { type: "school", text: "какой момент в школьной жизни достоин финальных титров?" },
  { type: "school", text: "объясните, почему «я забыл» иногда звучит честнее, чем длинная легенда." },
  { type: "school", text: "какую школьную ситуацию надо запретить женевской конвенцией класса?" },

  { type: "cringe", text: "писать «можно вопрос?» и молчать 12 минут: норм или перебор?" },
  { type: "cringe", text: "голосовое на 5 минут, где смысл был в первых 8 секундах: норм или перебор?" },
  { type: "cringe", text: "начинать с «я без негатива», а дальше идти по списку претензий: норм или перебор?" },
  { type: "cringe", text: "быть онлайн и делать вид, что сообщение не существует: норм или перебор?" },
  { type: "cringe", text: "говорить «мне всё равно» и спорить до победы: норм или перебор?" },
  { type: "cringe", text: "писать «ахах» без единой эмоции в душе: норм или перебор?" },
  { type: "cringe", text: "говорить «я быстро» до начала сборов: норм или перебор?" },
  { type: "cringe", text: "ставить точку в коротком сообщении, чтобы всем стало холодно: норм или перебор?" },
  { type: "cringe", text: "сказать «ладно» так, что разговор официально умер: норм или перебор?" },
  { type: "cringe", text: "стать экспертом после одного ролика на тему: норм или перебор?" },
  { type: "cringe", text: "отвечать «пон» на сообщение, где человек реально старался: норм или перебор?" },
  { type: "cringe", text: "писать «не срочно», когда срочно настолько, что уже горит: норм или перебор?" },
  { type: "cringe", text: "кинуть мем вместо извинения: норм или перебор?" },
  { type: "cringe", text: "сказать «я не обиделся» голосом человека, который запомнил всё: норм или перебор?" },
  { type: "cringe", text: "делать вид, что «случайно» не заметил просьбу: норм или перебор?" },
  { type: "cringe", text: "обсуждать планы час и в итоге никуда не пойти: норм или перебор?" },
  { type: "cringe", text: "начать сообщение с «слушай», чтобы всем стало понятно: сейчас будет тяжело: норм или перебор?" },
  { type: "cringe", text: "писать «я дома» через два часа после прихода домой: норм или перебор?" },
  { type: "cringe", text: "сказать «делайте как хотите» и потом оценивать каждый выбор: норм или перебор?" },
  { type: "cringe", text: "открыть сообщение, закрыть сообщение, забыть ответить навсегда: норм или перебор?" },

  { type: "alpaca", text: "альпака меняет правило: ответ должен звучать как оправдание, в которое никто не верит." },
  { type: "alpaca", text: "альпака требует дипломатии: скажите жёсткий ответ максимально вежливым тоном." },
  { type: "alpaca", text: "альпака забрала воздух: ответ не длиннее пяти слов. если смешно — +1, если очень смешно — +2." },
  { type: "alpaca", text: "альпака включает суд: одна команда обвиняет, другая защищает. остальные выбирают победителя." },
  { type: "alpaca", text: "альпака любит риск: ответ за 15 секунд может принести +2, если он не слабый." },
  { type: "alpaca", text: "альпака запрещает нормальность: начните ответ словами «официальная версия такая…»." },
  { type: "alpaca", text: "альпака требует улику: покажите предмет рядом и объясните, почему он доказывает вашу правоту." },
  { type: "alpaca", text: "альпака режет пафос: самый уверенный участник молчит, финальный ответ даёт другой." },
  { type: "alpaca", text: "альпака открывает комментарии: другая команда задаёт один неприятный, но честный вопрос." },
  { type: "alpaca", text: "альпака объявляет блиц: если ответ зашёл двум людям вслух — берите +2." },
  { type: "alpaca", text: "альпака включает 2016: ответ должен звучать как подпись к vine." },
  { type: "alpaca", text: "альпака дала mute: один участник объясняет жестами, команда переводит." },
  { type: "alpaca", text: "альпака требует трейлер: ответьте так, будто это анонс фильма." },
  { type: "alpaca", text: "альпака ставит лимит: в ответе нельзя использовать слово «ну»." },
  { type: "alpaca", text: "альпака даёт право вето: соседняя команда может запретить одно слово в вашем ответе." },
  { type: "alpaca", text: "альпака просит рекламу: продайте свой ответ так, будто это странный товар." },
  { type: "alpaca", text: "альпака включает режим учителя: начните ответ с «так, внимание»." },
  { type: "alpaca", text: "альпака требует заголовок: сначала придумайте название, потом объясните ответ." },
  { type: "alpaca", text: "альпака делает обмен: после ответа выберите команду, которая должна его улучшить одним предложением." },
  { type: "alpaca", text: "альпака закрывает эфир: финальный ответ должен уместиться в одно сообщение." },
];

const STORAGE_KEY = "sonya-level-17-state";
const CARD_SET_VERSION = "cards-100-v1";
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
    state.deck = prepareDeck();
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
  if (state.deck.length < state.totalRounds) {
    state.deck = prepareDeck();
  }
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
  state.deck = prepareDeck();
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
  state.deck = prepareDeck();
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
    state.deck = prepareDeck();
  }

  const index = state.deck.shift();
  if (!state.used.includes(index)) {
    state.used.push(index);
  }
  return index;
}

function prepareDeck() {
  const validUsed = state.used.filter((index) => index >= 0 && index < CARDS.length);
  const available = allCardIndexes().filter((index) => !validUsed.includes(index));

  if (available.length >= state.totalRounds) {
    state.used = validUsed;
    return shuffle(available);
  }

  state.used = [];
  return shuffle(allCardIndexes());
}

function allCardIndexes() {
  return CARDS.map((_, index) => index);
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
    const merged = { ...defaultState(), ...saved };
    if (merged.cardSetVersion !== CARD_SET_VERSION) {
      return defaultState();
    }
    merged.used = Array.isArray(merged.used)
      ? merged.used.filter((index) => Number.isInteger(index) && index >= 0 && index < CARDS.length)
      : [];
    merged.deck = Array.isArray(merged.deck)
      ? merged.deck.filter((index) => Number.isInteger(index) && index >= 0 && index < CARDS.length)
      : [];
    return merged;
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
    cardSetVersion: CARD_SET_VERSION,
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
