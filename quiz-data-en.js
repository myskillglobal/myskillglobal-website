const STORY_TITLE = "The Four-Piece Treasure Map";
const PASS_PERCENT = 40;

const QUESTIONS = [
  // Episode 1
  {ep:1, q:"Who owns Bella Pizza?", options:["Kanchan","Supriya","Arindam Chowdhury","Sundar"], correct:1},
  {ep:1, q:"What is Supriya's father's name?", options:["Harinarayan Chowdhury","Arindam Chowdhury","Sundar Roy","Kanchan Chowdhury"], correct:1},
  {ep:1, q:"What was Supriya riding when she went out for a home delivery?", options:["A bicycle","A scooter","A car","A rickshaw"], correct:1},
  {ep:1, q:"Which parts of Kanchan's body were injured in the accident?", options:["Head and arm","Knee and elbow","Back and shoulder","Leg and waist"], correct:1},

  // Episode 2
  {ep:2, q:"What had Kanchan previously been studying?", options:["Hotel management","Business studies","Engineering","Agricultural science"], correct:0},
  {ep:2, q:"What happened to Kanchan after his father's death?", options:["He started a business","He left his studies and started working","He moved abroad","He opened a shop"], correct:1},
  {ep:2, q:"What did Supriya first offer Kanchan?", options:["To buy the shop","To come make pizza every evening","To become a business partner","To leave the city"], correct:1},
  {ep:2, q:"How did Supriya react after tasting the pizza Kanchan made?", options:["So-so","Much better than before","She didn't like it","She felt nothing different"], correct:1},

  // Episode 3
  {ep:3, q:"Who is Sundar?", options:["A police officer","The son of a wealthy business family","Kanchan's friend","A relative of Supriya's"], correct:1},
  {ep:3, q:"What did Sundar offer Supriya?", options:["A marriage proposal","To join his franchise","To sell the shop","To leave the city"], correct:1},
  {ep:3, q:"How did Sundar react after Supriya refused him?", options:["Left happily","Felt insulted and issued a threat","Apologized","Never came back"], correct:1},

  // Episode 4
  {ep:4, q:"When did the fire break out at Bella Pizza?", options:["At midnight","At 2:17 AM","At 5 AM","At 7 PM"], correct:1},
  {ep:4, q:"What damage did the fire cause to the shop?", options:["The whole shop burned down","Wooden shelves and cartons burned","Nothing was damaged","Only the shutter was damaged"], correct:1},
  {ep:4, q:"What smell did Kanchan notice at the burnt spot?", options:["Petrol","Kerosene","Gas","Smoke"], correct:1},

  // Episode 5
  {ep:5, q:"Who is seen in the CCTV footage?", options:["Supriya","A man with his face covered","Kanchan","The police"], correct:1},
  {ep:5, q:"Kanchan recognizes the man because he'd previously seen him with whom?", options:["Sundar","Arindam","The police","A neighbor"], correct:0},

  // Episode 6
  {ep:6, q:"Where does Kanchan find the iron box?", options:["Inside the well","Under a broken wall of the ancestral house","In the prayer room","Near the Shiva lingam"], correct:1},
  {ep:6, q:"Whose face was in the picture inside the box?", options:["Kanchan's father's","Harinarayan Chowdhury's","Arindam's","Supriya's grandfather's"], correct:1},
  {ep:6, q:"According to the letter, into how many parts was the path to the truth divided?", options:["Two parts","Three parts","Four parts","Five parts"], correct:2},

  // Episode 7
  {ep:7, q:"How did Harinarayan Chowdhury die?", options:["Of illness","Wounded in a foreign invasion","In an accident","Of old age"], correct:1},
  {ep:7, q:"Why did Harinarayan divide the clue into four parts?", options:["For fun","So the full path wouldn't reach unauthorized hands","For lack of space","To divide the family"], correct:1},

  // Episode 8
  {ep:8, q:"Where was the real first piece hidden?", options:["In a brick of the well","In an old picture frame","In a manuscript in the prayer room","On the pedestal of the Shiva lingam"], correct:1},
  {ep:8, q:"What was written on the back of the first piece?", options:["\"Where there is no sound, yet a verse speaks\"","\"Where water lies, yet water does not touch\"","\"Where prayer ends\"","\"The path shall reveal itself to its rightful heir\""], correct:1},
  {ep:8, q:"Which direction did this clue point Kanchan toward?", options:["Toward the prayer room","Toward the Shiva lingam","Toward the well","Toward the underground chamber"], correct:2},

  // Episode 9
  {ep:9, q:"Whom does Kanchan see near the well?", options:["Sundar","An unfamiliar man with his face covered","Arindam","The police"], correct:1},
  {ep:9, q:"Exactly where is the second piece found?", options:["Behind a loose brick of the well","In the picture frame","In the fold of a manuscript","Beneath the Shiva lingam"], correct:0},
  {ep:9, q:"What was written on the back of the second piece?", options:["\"Where water lies, yet water does not touch\"","\"Where there is no sound, yet a verse speaks\"","\"In the flow of time, three truths\"","\"At the wrong touch, life shall be undone\""], correct:1},
  {ep:9, q:"What place does this clue point toward?", options:["Toward the well","Toward the Shiva lingam","Toward the prayer room","Toward the underground chamber"], correct:2},

  // Episode 10
  {ep:10, q:"Where had Arindam found the gold coins many years ago?", options:["Inside the well","Near the pedestal of the Shiva lingam","In the prayer room","In the iron box"], correct:1},
  {ep:10, q:"Where is the third piece found?", options:["Beneath the Shiva lingam","In a brick of the well","In the fold of an old manuscript","Behind a mirror"], correct:2},
  {ep:10, q:"Where is the fourth piece found?", options:["In the prayer room","Beneath the pedestal of the Shiva lingam","At the bottom of the well","Under an old table"], correct:1},
  {ep:10, q:"After joining the four pieces, how is the true path revealed?", options:["By burning it","By its reflection in a mirror","By soaking it in water","By drying it in the sun"], correct:1},

  // Episode 11
  {ep:11, q:"How many brass wheels were on the chest in the underground chamber?", options:["Two","Three","Four","Five"], correct:1},
  {ep:11, q:"What warning was carved beside the third wheel?", options:["\"The path shall reveal itself to its rightful heir\"","\"At the wrong touch, life shall be undone\"","\"In the flow of time, three truths\"","\"Open not the door before its time\""], correct:1},
  {ep:11, q:"What is found inside the chest, instead of gold?", options:["Diamonds and jewels","A letter and old land documents","Another map","Nothing at all"], correct:1},
  {ep:11, q:"Whose name is found on the last page of the documents?", options:["Kanchan's father's","Arindam's great-grandfather's","Sundar's father's","Harinarayan's wife's"], correct:1},

  // Episode 12
  {ep:12, q:"How does Arindam reach the underground chamber?", options:["Kanchan calls him there","By following Supriya","With the police's help","By finding the map himself"], correct:1},
  {ep:12, q:"Why had Arindam been trying to buy Kanchan's ancestral house all this time?", options:["To expand his business","Out of greed for treasure","For Supriya's sake","For political reasons"], correct:1},
  {ep:12, q:"What does Arindam finally call Kanchan?", options:["Just an employee","One of the family","A stranger","A rival"], correct:1},

  // Episode 13
  {ep:13, q:"What is Arindam's reaction to Kanchan and Supriya's relationship?", options:["He objects","He gives his blessing and consent","He says nothing","He gets angry"], correct:1},
  {ep:13, q:"What is done with a portion of Bella Pizza's profits?", options:["A new branch is opened","Education is arranged for underprivileged children in the village","It's spent on advertising","A mirror is bought"], correct:1},
  {ep:13, q:"What was Harinarayan's immortal saying?", options:["\"Gold alone is real wealth\"","\"Wealth is for the wellbeing of people — not people for the servitude of wealth\"","\"Silence is best\"","\"It is best to keep the truth hidden\""], correct:1},

  // General / overall questions
  {ep:0, q:"What is the name of the novel?", options:["Behind an Identity","The Four-Piece Treasure Map","The Price of Self-Respect","Awakening"], correct:1},
  {ep:0, q:"What is the novel's subtitle?", options:["A Hundred Years of Love","A Hundred-Year-Old Truth Behind the Treasure","In Search of a Lost Path","The Story of a Small Accident"], correct:1},
  {ep:0, q:"What is Bella Pizza's slogan?", options:["\"Fresh Pizza, Fresh Smile\"","\"Best Pizza in Town\"","\"Taste of Home\"","\"Hot and Fresh\""], correct:0},
  {ep:0, q:"What degree did Supriya return from abroad with?", options:["MBBS","MBA","B.Tech","PhD"], correct:1},
  {ep:0, q:"Harinarayan Chowdhury is Kanchan's ancestor in what relation?", options:["Grandfather","Great-grandfather","Uncle","Father"], correct:1},
  {ep:0, q:"What does the four-piece map ultimately lead to?", options:["A new shop","A hidden underground chamber","A river","A mountain road"], correct:1},
  {ep:0, q:"What is found as the 'treasure' at the end of the story, and what is its real worth?", options:["A great deal of gold","Documents protecting people's rights","A royal crown","An ancient sword"], correct:1},
  {ep:0, q:"In how many episodes does the novel come to an end?", options:["Ten episodes","Twelve episodes","Thirteen episodes","Fifteen episodes"], correct:2},
];
