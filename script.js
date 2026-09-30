// Arabic text and Saheeh International translations checked against Quran.com.
// Add more entries to this collection to expand categories and search.
const verses = [
  { id: "13:28", surah: "Ar-Ra'd", arabic: "ٱلَّذِينَ ءَامَنُوا۟ وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ ٱللَّهِ ۗ أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ", translation: "Those who have believed and whose hearts are assured by the remembrance of Allāh. Unquestionably, by the remembrance of Allāh hearts are assured.", categories: ["Comfort", "Difficult Times"], keywords: ["peace", "heart", "remembrance", "calm", "worry"] },
  { id: "94:5", surah: "Ash-Sharh", arabic: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا", translation: "For indeed, with hardship [will be] ease [i.e., relief].", categories: ["Difficult Times", "Patience", "Hope"], keywords: ["hardship", "ease", "relief", "struggle", "difficulty"] },
  { id: "94:6", surah: "Ash-Sharh", arabic: "إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا", translation: "Indeed, with hardship [will be] ease.", categories: ["Comfort", "Difficult Times", "Patience", "Hope"], keywords: ["hardship", "ease", "relief", "struggle", "difficulty"] },
  { id: "39:53", surah: "Az-Zumar", arabic: "قُلْ يَـٰعِبَادِىَ ٱلَّذِينَ أَسْرَفُوا۟ عَلَىٰٓ أَنفُسِهِمْ لَا تَقْنَطُوا۟ مِن رَّحْمَةِ ٱللَّهِ ۚ إِنَّ ٱللَّهَ يَغْفِرُ ٱلذُّنُوبَ جَمِيعًا ۚ إِنَّهُۥ هُوَ ٱلْغَفُورُ ٱلرَّحِيمُ", translation: "Say, \"O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allāh. Indeed, Allāh forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.\"", categories: ["Forgiveness", "Hope"], keywords: ["mercy", "repentance", "sins", "forgiving", "despair"] },
  { id: "14:7", surah: "Ibrahim", arabic: "وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِى لَشَدِيدٌ", translation: "And [remember] when your Lord proclaimed, 'If you are grateful, I will surely increase you [in favor]; but if you deny, indeed, My punishment is severe.'", categories: ["Gratitude"], keywords: ["thankful", "blessing", "grateful", "thanks"] },
  { id: "2:153", surah: "Al-Baqarah", arabic: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ", translation: "O you who have believed, seek help through patience and prayer. Indeed, Allāh is with the patient.", categories: ["Patience", "Difficult Times", "Strength"], keywords: ["prayer", "persevere", "hardship", "steadfast", "patient"] },
  { id: "65:3", surah: "At-Talaq", arabic: "وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ ۚ وَمَن يَتَوَكَّلْ عَلَى ٱللَّهِ فَهُوَ حَسْبُهُۥٓ ۚ إِنَّ ٱللَّهَ بَـٰلِغُ أَمْرِهِۦ ۚ قَدْ جَعَلَ ٱللَّهُ لِكُلِّ شَىْءٍ قَدْرًا", translation: "And will provide for him from where he does not expect. And whoever relies upon Allāh—then He is sufficient for him. Indeed, Allāh will accomplish His purpose. Allāh has already set for everything a [decreed] extent.", categories: ["Hope", "Difficult Times", "Guidance"], keywords: ["trust", "rely", "provision", "uncertainty", "future", "plan"] },
  { id: "2:2", surah: "Al-Baqarah", arabic: "ذَٰلِكَ ٱلْكِتَـٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ", translation: "This is the Book about which there is no doubt, a guidance for those conscious of Allāh.", categories: ["Guidance"], keywords: ["direction", "book", "path", "quran", "guide"] },
  { id: "50:16", surah: "Qaf", arabic: "وَلَقَدْ خَلَقْنَا ٱلْإِنسَـٰنَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِۦ نَفْسُهُۥ ۖ وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ ٱلْوَرِيدِ", translation: "And We have already created man and know what his soul whispers to him, and We are closer to him than [his] jugular vein.", categories: ["Feeling Alone", "Comfort"], keywords: ["lonely", "alone", "near", "seen", "whispers"] },
  { id: "3:139", surah: "Ali 'Imran", arabic: "وَلَا تَهِنُوا۟ وَلَا تَحْزَنُوا۟ وَأَنتُمُ ٱلْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ", translation: "So do not weaken and do not grieve, and you will be superior if you are [true] believers.", categories: ["Strength", "Hope"], keywords: ["courage", "grief", "weak", "resilience", "strength"] },
  { id: "3:185", surah: "Ali 'Imran", arabic: "كُلُّ نَفْسٍ ذَآئِقَةُ ٱلْمَوْتِ ۗ وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ يَوْمَ ٱلْقِيَـٰمَةِ ۖ فَمَن زُحْزِحَ عَنِ ٱلنَّارِ وَأُدْخِلَ ٱلْجَنَّةَ فَقَدْ فَازَ ۗ وَمَا ٱلْحَيَوٰةُ ٱلدُّنْيَآ إِلَّا مَتَـٰعُ ٱلْغُرُورِ", translation: "Every soul will taste death, and you will only be given your [full] compensation on the Day of Resurrection. So he who is drawn away from the Fire and admitted to Paradise has attained [his desire]. And what is the life of this world except the enjoyment of delusion.", categories: ["Death & The Hereafter"], keywords: ["death", "afterlife", "resurrection", "paradise", "hereafter"] },
  { id: "2:186", surah: "Al-Baqarah", arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ ٱلدَّاعِ إِذَا دَعَانِ ۖ فَلْيَسْتَجِيبُوا۟ لِي وَلْيُؤْمِنُوا۟ بِي لَعَلَّهُمْ يَرْشُدُونَ", translation: "And when My servants ask you, [O Muḥammad], concerning Me—indeed I am near. I respond to the invocation of the supplicant when he calls upon Me. So let them respond to Me [by obedience] and believe in Me that they may be [rightly] guided.", categories: ["Guidance", "Feeling Alone", "Comfort"], keywords: ["dua", "prayer", "near", "lonely", "answer", "supplication"] },
  { id: "3:134", surah: "Ali 'Imran", arabic: "ٱلَّذِينَ يُنفِقُونَ فِى ٱلسَّرَّآءِ وَٱلضَّرَّآءِ وَٱلْكَـٰظِمِينَ ٱلْغَيْظَ وَٱلْعَافِينَ عَنِ ٱلنَّاسِ ۗ وَٱللَّهُ يُحِبُّ ٱلْمُحْسِنِينَ", translation: "Who spend [in the cause of Allāh] during ease and hardship and who restrain anger and who pardon the people—and Allāh loves the doers of good.", categories: ["Forgiveness", "Gratitude", "Patience"], keywords: ["pardon", "anger", "forgive", "kindness", "good"] },
  { id: "12:86", surah: "Yusuf", arabic: "قَالَ إِنَّمَآ أَشْكُوا۟ بَثِّى وَحُزْنِىٓ إِلَى ٱللَّهِ وَأَعْلَمُ مِنَ ٱللَّهِ مَا لَا تَعْلَمُونَ", translation: "He said, \"I only complain of my suffering and my grief to Allāh, and I know from Allāh that which you do not know.\"", categories: ["Comfort", "Feeling Alone"], keywords: ["heartbreak", "heartbroken", "broken heart", "grief", "sorrow", "sadness", "loss", "separation"] }
];

const categories = [
  { name: "Comfort", icon: "◌", description: "Words to rest your heart." },
  { name: "Difficult Times", icon: "⌁", description: "Steadiness through a hard season." },
  { name: "Forgiveness", icon: "♡", description: "Return to mercy and renewal." },
  { name: "Gratitude", icon: "✧", description: "Notice the gifts already here." },
  { name: "Patience", icon: "◷", description: "Keep going with trust and prayer." },
  { name: "Hope", icon: "☼", description: "Hold on to what is still possible." },
  { name: "Guidance", icon: "⌖", description: "Seek direction for the next step." },
  { name: "Feeling Alone", icon: "☾", description: "Remember that you are not unseen." },
  { name: "Strength", icon: "◇", description: "A reminder of resolve and courage." },
  { name: "Death & The Hereafter", icon: "✦", description: "Reflect on the life beyond this one." }
];

const categoryGrid = document.querySelector("#category-grid");
const verseResults = document.querySelector("#verse-results");
const savedVerses = document.querySelector("#saved-verses");
const dailyVerse = document.querySelector("#daily-verse");
const randomResult = document.querySelector("#random-result");
const searchInput = document.querySelector("#verse-search");
const resultCount = document.querySelector("#result-count");
const activeFilterLabel = document.querySelector("#active-filter-label");
const toast = document.querySelector("#toast");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");
const storageKey = "noor-saved-verses";
let selectedCategory = "";
let savedIds = loadSavedIds();
let toastTimer;

function loadSavedIds() {
  try {
    const storedIds = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(storedIds) ? storedIds.filter((id) => verses.some((verse) => verse.id === id)) : [];
  } catch {
    return [];
  }
}

function saveIdsToStorage() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(savedIds));
  } catch {
    showToast("Your browser could not save this verse.");
  }
}

function createCategories() {
  categories.forEach((category) => {
    const card = document.createElement("article");
    card.className = "category-card";
    const icon = document.createElement("span");
    icon.className = "category-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = category.icon;
    const title = document.createElement("h3");
    title.textContent = category.name;
    const description = document.createElement("p");
    description.textContent = category.description;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "View verses →";
    button.setAttribute("aria-label", `View verses for ${category.name}`);
    button.addEventListener("click", () => showCategory(category.name));
    card.append(icon, title, description, button);
    categoryGrid.append(card);
  });
}

function createVerseCard(verse) {
  const card = document.createElement("article");
  card.className = "verse-card";
  const top = document.createElement("div");
  top.className = "verse-card-top";
  const category = document.createElement("span");
  category.className = "verse-category";
  category.textContent = verse.categories[0];
  top.append(category);

  const arabic = document.createElement("p");
  arabic.className = "verse-arabic arabic-text";
  arabic.lang = "ar";
  arabic.dir = "rtl";
  arabic.textContent = verse.arabic;
  const translation = document.createElement("p");
  translation.className = "verse-translation";
  translation.textContent = `“${verse.translation}”`;

  const referenceRow = document.createElement("div");
  referenceRow.className = "verse-reference";
  const referenceLink = document.createElement("a");
  const [surahNumber, ayahNumber] = verse.id.split(":");
  referenceLink.href = `https://quran.com/${surahNumber}/${ayahNumber}`;
  referenceLink.target = "_blank";
  referenceLink.rel = "noreferrer";
  referenceLink.textContent = `Surah ${verse.surah} ${verse.id} ↗`;

  const actions = document.createElement("div");
  actions.className = "verse-actions";
  const saveButton = document.createElement("button");
  const isSaved = savedIds.includes(verse.id);
  saveButton.type = "button";
  saveButton.className = `verse-action${isSaved ? " is-saved" : ""}`;
  saveButton.setAttribute("aria-pressed", String(isSaved));
  saveButton.setAttribute("aria-label", `${isSaved ? "Remove saved" : "Save"} verse ${verse.id}`);
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.setAttribute("aria-hidden", "true");
  heart.textContent = isSaved ? "♥" : "♡";
  const saveLabel = document.createElement("span");
  saveLabel.textContent = isSaved ? "Saved" : "Save";
  saveButton.append(heart, saveLabel);
  saveButton.addEventListener("click", () => toggleSaved(verse.id));

  const shareButton = document.createElement("button");
  shareButton.type = "button";
  shareButton.className = "verse-action";
  shareButton.setAttribute("aria-label", `Share verse ${verse.id}`);
  shareButton.innerHTML = '<span aria-hidden="true">↗</span><span>Share</span>';
  shareButton.addEventListener("click", () => shareVerse(verse));
  actions.append(saveButton, shareButton);
  referenceRow.append(referenceLink, actions);
  card.append(top, arabic, translation, referenceRow);
  return card;
}

function renderVerseList(container, verseList, emptyMessage) {
  container.replaceChildren();
  if (verseList.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = emptyMessage;
    container.append(empty);
    return;
  }
  verseList.forEach((verse) => container.append(createVerseCard(verse)));
}

function renderResults() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const matches = verses.filter((verse) => {
    const inCategory = !selectedCategory || verse.categories.includes(selectedCategory);
    const searchableText = [verse.surah, verse.id, verse.translation, ...verse.categories, ...verse.keywords].join(" ").toLocaleLowerCase();
    return inCategory && (!query || searchableText.includes(query));
  });
  renderVerseList(verseResults, matches, "No verses found. Try another search or clear the filters.");
  resultCount.textContent = `${matches.length} ${matches.length === 1 ? "verse" : "verses"}${selectedCategory ? ` in ${selectedCategory}` : " in the collection"}`;
  activeFilterLabel.textContent = selectedCategory ? `Verses connected to ${selectedCategory}.` : "Browse the collection or search for a topic.";
}

function renderSavedVerses() {
  const saved = verses.filter((verse) => savedIds.includes(verse.id));
  document.querySelector("#saved-total").textContent = String(saved.length);
  renderVerseList(savedVerses, saved, "Save a verse to keep it close for another time.");
}

function showCategory(categoryName) {
  selectedCategory = categoryName;
  searchInput.value = "";
  renderResults();
  document.querySelector("#verses").scrollIntoView({ behavior: "smooth" });
}

function toggleSaved(verseId) {
  if (savedIds.includes(verseId)) {
    savedIds = savedIds.filter((id) => id !== verseId);
    showToast("Verse removed from saved verses.");
  } else {
    savedIds.push(verseId);
    showToast("Verse saved on this device.");
  }
  saveIdsToStorage();
  renderResults();
  renderSavedVerses();
  renderSpecialVerses();
}

function renderSpecialVerses() {
  const today = new Date();
  const dayNumber = Math.floor(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) / 86400000);
  dailyVerse.replaceChildren(createVerseCard(verses[dayNumber % verses.length]));
}

function showRandomVerse() {
  randomResult.replaceChildren(createVerseCard(verses[Math.floor(Math.random() * verses.length)]));
}

async function shareVerse(verse) {
  const [surahNumber, ayahNumber] = verse.id.split(":");
  const referenceUrl = `https://quran.com/${surahNumber}/${ayahNumber}`;
  const shareText = `${verse.arabic}\n\n“${verse.translation}”\n\nSurah ${verse.surah} ${verse.id}\n${referenceUrl}`;
  if (navigator.share) {
    try {
      await navigator.share({ title: `Qur'an ${verse.id}`, text: shareText, url: referenceUrl });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(shareText);
    } else {
      const temporaryInput = document.createElement("textarea");
      temporaryInput.value = shareText;
      temporaryInput.setAttribute("readonly", "");
      temporaryInput.style.position = "fixed";
      temporaryInput.style.opacity = "0";
      document.body.append(temporaryInput);
      temporaryInput.select();
      const copied = document.execCommand("copy");
      temporaryInput.remove();
      if (!copied) throw new Error("Copy command failed");
    }
    showToast("Verse copied to clipboard.");
  } catch {
    showToast("Unable to copy automatically. Please copy the verse text.");
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function closeMobileNavigation() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  primaryNavigation.classList.remove("is-open");
}

searchInput.addEventListener("input", renderResults);
document.querySelector("#clear-filter").addEventListener("click", () => {
  selectedCategory = "";
  searchInput.value = "";
  renderResults();
  searchInput.focus();
});
document.querySelector("#random-button").addEventListener("click", showRandomVerse);
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
  primaryNavigation.classList.toggle("is-open", !isOpen);
});
primaryNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMobileNavigation();
});
document.querySelector("#current-year").textContent = String(new Date().getFullYear());
createCategories();
renderResults();
renderSavedVerses();
renderSpecialVerses();