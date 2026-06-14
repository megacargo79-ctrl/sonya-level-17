const CARD_TYPES = {
  warmup: { label: "разогрев" },
  meme: { label: "мемный суд" },
  school: { label: "школьный лор" },
  cringe: { label: "норм или перебор" },
  alpaca: { label: "альпака меняет правило" },
};

const CARDS = [
  { type: "warmup", text: "каждому в команде назначьте мем из 2016 года. объясните, почему это не случайное обвинение." },
  { type: "warmup", text: "кто в вашей команде теряет больше всего aura points за первые 10 секунд разговора?" },
  { type: "warmup", text: "придумайте фразу, после которой человек мгновенно становится npc в школьном коридоре." },
  { type: "warmup", text: "придумайте 2016-титул для каждого в команде: ловец покемонов, министр дэба, архивариус вайнов." },
  { type: "warmup", text: "какой поступок на вечеринке даёт +100 aura points, но выглядит максимально глупо?" },
  { type: "warmup", text: "составьте tier list из трёх вещей: голосовые, «я сейчас», точка в конце сообщения." },
  { type: "warmup", text: "назовите школьный red flag, который не опасный, но сразу всё понятно." },
  { type: "warmup", text: "ваша команда — аккаунт из 2016. какой контент вы постите, чтобы вас смотрели и стыдились?" },
  { type: "warmup", text: "назовите фразу, которая звучит как «я взрослый», но значит «я устал и хочу домой»." },
  { type: "warmup", text: "кто из команды выжил бы в 2016 без тиктока, но с vine, musical.ly и pokemon go?" },
  { type: "warmup", text: "придумайте худшую причину написать «сорян, только увидел» через сутки." },
  { type: "warmup", text: "какой момент в разговоре надо сопровождать mannequin challenge, потому что все замерли?" },
  { type: "warmup", text: "ваша команда получает диагноз: brainrot, sigma, npc или main character. выберите и оправдайтесь." },
  { type: "warmup", text: "придумайте ответ на «ты где?», который технически не врёт, но бесит." },
  { type: "warmup", text: "какой мем 2016 лучше всего описывает вашу команду через 5 минут после начала игры?" },
  { type: "warmup", text: "кто в команде выглядит как человек, который скажет «я понял», не поняв вообще ничего?" },
  { type: "warmup", text: "какой предмет рядом забирает у команды aura points просто своим существованием?" },
  { type: "warmup", text: "придумайте название группового чата вашей команды, будто его создали в 2016 и забыли удалить." },
  { type: "warmup", text: "что надо сделать, чтобы вся команда одновременно сказала «нет, ну это перебор»?" },
  { type: "warmup", text: "выберите командный вайб: pokemon go на районе, vine на перемене или musical.ly без стыда." },

  { type: "meme", text: "опишите каждого участника команды одним мемом 2016. за слабое объяснение минус aura." },
  { type: "meme", text: "какой участник команды — evil kermit: снаружи норм, внутри уже предлагает плохой план?" },
  { type: "meme", text: "какой момент сегодняшнего вечера заслуживает crying jordan, но без драмы?" },
  { type: "meme", text: "придумайте vine на 6 секунд про вашу команду. начало, поворот, позорный финал." },
  { type: "meme", text: "если бы ваша команда была mannequin challenge, в какой неловкой позе вас бы застали?" },
  { type: "meme", text: "назначьте команде мемный саунд 2016. объясните, где он должен включаться." },
  { type: "meme", text: "придумайте подпись в стиле «me at the beginning vs end of 2016» для вашей команды." },
  { type: "meme", text: "кто в команде — drake views: сидит высоко, но не факт, что помогает?" },
  { type: "meme", text: "какой командный поступок заслуживает «damn daniel», хотя никто не понимает почему?" },
  { type: "meme", text: "сделайте прогноз: какой мем 2016 ваша команда случайно возродит сегодня?" },
  { type: "meme", text: "какой участник команды выглядел бы как главный герой плохого vine-скетча?" },
  { type: "meme", text: "придумайте подпись к командному фото, будто его выложили в 2016 и сразу пожалели." },
  { type: "meme", text: "какой мем 2016 описывает человека, который обещал помочь и открыл режим невидимки?" },
  { type: "meme", text: "ваша команда делает dab. кто делает это слишком уверенно, и почему это пугает?" },
  { type: "meme", text: "придумайте 2016-мем про человека, который отвечает «ок» так, будто началась холодная война." },
  { type: "meme", text: "какой участник команды — pokemon go: вроде рядом, но мысленно ищет что-то другое?" },
  { type: "meme", text: "ваш командный brainrot получил название как старый мем. как он называется?" },
  { type: "meme", text: "придумайте musical.ly-образ вашей команды: песня, движение, причина удалить через час." },
  { type: "meme", text: "какой момент из школьной жизни надо объяснять через meme starter pack 2016?" },
  { type: "meme", text: "выберите мем 2016, который описывает вашу команду, если ей дать важную задачу." },

  { type: "school", text: "кто в команде получил бы +100 aura points за ответ у доски, но потерял бы их на объяснении?" },
  { type: "school", text: "назовите школьный red flag: не опасный, но сразу понятно, что сейчас будет тяжело." },
  { type: "school", text: "какая фраза учителя превращает весь класс в npc за одну секунду?" },
  { type: "school", text: "выберите худшее: «работаем в парах», «достаём листочки» или «это было на прошлом уроке»." },
  { type: "school", text: "кто в групповом проекте опаснее: контролёр, молчун или «я потом добавлю»?" },
  { type: "school", text: "придумайте школьный диагноз вашей команде: brainrot, too serious, main character или mute." },
  { type: "school", text: "какой школьный момент нужно заморозить mannequin challenge, потому что все всё поняли?" },
  { type: "school", text: "какое сообщение в школьном чате звучит спокойно, но ломает вечер?" },
  { type: "school", text: "какой человек в классе заслуживает титул «официальный переводчик задания на человеческий»?" },
  { type: "school", text: "придумайте оправдание для опоздания, которое настолько плохое, что почти гениальное." },
  { type: "school", text: "какой предмет в школе забирает aura points ещё до начала урока?" },
  { type: "school", text: "назовите фразу, после которой весь класс делает вид, что записывает, но просто выживает." },
  { type: "school", text: "кто из команды выжил бы в школьном чате без права писать «пон»?" },
  { type: "school", text: "составьте tier list школьных ужасов: презентация, устный ответ, внезапный тест." },
  { type: "school", text: "какая школьная ситуация звучит как side quest, но почему-то обязательная?" },
  { type: "school", text: "придумайте мем 2016 про человека, который узнаёт о контрольной при раздаче листов." },
  { type: "school", text: "какой участник команды был бы главным по переговорам с учителем и почему это опасно?" },
  { type: "school", text: "назовите школьное правило, которое все знают, но никто официально не видел." },
  { type: "school", text: "какой момент в школе сразу делает из человека «я дома, но душой нет»?" },
  { type: "school", text: "если бы ваш класс был приложением 2016 года, какая функция сломалась бы первой?" },

  { type: "cringe", text: "написать «можно вопрос?» и исчезнуть на 12 минут: норм или перебор? голосуем с аргументами." },
  { type: "cringe", text: "голосовое на 5 минут, где смысл был 8 секунд: норм или перебор?" },
  { type: "cringe", text: "сказать «я без негатива» и дальше устроить разбор полётов: норм или перебор?" },
  { type: "cringe", text: "быть онлайн и делать вид, что сообщение не существует: норм или перебор?" },
  { type: "cringe", text: "сказать «мне всё равно» и спорить до финального босса: норм или перебор?" },
  { type: "cringe", text: "писать «ахах» без единой эмоции в душе: норм или перебор?" },
  { type: "cringe", text: "говорить «я быстро», ещё не начав собираться: норм или перебор?" },
  { type: "cringe", text: "поставить точку в коротком сообщении и забрать у всех тепло: норм или перебор?" },
  { type: "cringe", text: "ответить «пон» на сообщение, где человек реально старался: норм или перебор?" },
  { type: "cringe", text: "кинуть мем вместо извинения: норм или перебор?" },
  { type: "cringe", text: "сказать «я не обиделся» голосом человека, который запомнил всё: норм или перебор?" },
  { type: "cringe", text: "обсуждать планы час и в итоге никуда не пойти: норм или перебор?" },
  { type: "cringe", text: "начать сообщение со «слушай», чтобы всем стало понятно: сейчас будет тяжело." },
  { type: "cringe", text: "открыть сообщение, закрыть сообщение, забыть ответить навсегда: норм или перебор?" },
  { type: "cringe", text: "сделать вид, что «случайно» не заметил просьбу: норм или перебор?" },
  { type: "cringe", text: "называть себя sigma после самого обычного решения: норм или перебор?" },
  { type: "cringe", text: "потерять aura points и пытаться объяснить, что так и было задумано: норм или перебор?" },
  { type: "cringe", text: "сказать «я не в ресурсе» на просьбу передать салфетку: норм или перебор?" },
  { type: "cringe", text: "сделать dab в 2026, но с полной уверенностью: норм или перебор?" },
  { type: "cringe", text: "написать «сорри, только увидел», когда все знают, что нет: норм или перебор?" },

  { type: "alpaca", text: "альпака меняет правило: ответ должен звучать как оправдание, в которое не верит даже автор." },
  { type: "alpaca", text: "альпака требует aura audit: перед ответом назовите, сколько aura points команда сейчас теряет." },
  { type: "alpaca", text: "альпака включает 2016: ответ должен звучать как подпись к vine." },
  { type: "alpaca", text: "альпака забрала воздух: ответ не длиннее пяти слов. если смешно — +1, если убило — +2." },
  { type: "alpaca", text: "альпака включает суд: одна команда обвиняет, другая защищает. остальные выбирают победителя." },
  { type: "alpaca", text: "альпака любит риск: ответ за 15 секунд может принести +2, если он не слабый." },
  { type: "alpaca", text: "альпака запрещает нормальность: начните ответ словами «официальная версия такая…»." },
  { type: "alpaca", text: "альпака требует улику: покажите предмет рядом и объясните, почему он доказывает вашу правоту." },
  { type: "alpaca", text: "альпака режет пафос: самый уверенный участник молчит, финальный ответ даёт другой." },
  { type: "alpaca", text: "альпака открывает комментарии: другая команда задаёт один неприятный, но честный вопрос." },
  { type: "alpaca", text: "альпака объявляет блиц: если ответ зашёл двум людям вслух — берите +2." },
  { type: "alpaca", text: "альпака дала mute: один участник объясняет жестами, команда переводит." },
  { type: "alpaca", text: "альпака требует трейлер: ответьте так, будто это анонс фильма, который никто не просил." },
  { type: "alpaca", text: "альпака ставит лимит: в ответе нельзя использовать слово «ну»." },
  { type: "alpaca", text: "альпака даёт право вето: соседняя команда запрещает одно слово в вашем ответе." },
  { type: "alpaca", text: "альпака просит рекламу: продайте свой ответ так, будто это странный товар из 2016." },
  { type: "alpaca", text: "альпака включает режим учителя: начните ответ с «так, внимание»." },
  { type: "alpaca", text: "альпака требует заголовок: сначала название, потом объяснение." },
  { type: "alpaca", text: "альпака делает обмен: после ответа выберите команду, которая должна улучшить его одним предложением." },
  { type: "alpaca", text: "альпака закрывает эфир: финальный ответ должен уместиться в одно сообщение." },
];

const STORAGE_KEY = "sonya-level-17-state";
const CARD_SET_VERSION = "cards-100-v2";
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
