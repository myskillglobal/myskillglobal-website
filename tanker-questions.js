/* Hazardous Chemical Tanker Safety — 50 questions.
   Loads AFTER the main quiz script and registers itself as a new topic. */
(function () {
  var Q = [
    ['What is the main aim of the Hazardous Chemical Tanker safety system?', 'Safe transport, safe lives and a safe environment', ['Safe transport, safe lives and a safe environment', 'Faster delivery at any cost', 'Lower fuel use only', 'Advertising the company']],
    ['What does the AI Driver Cabin system monitor in real time?', 'The driver, using an AI camera', ['The driver, using an AI camera', 'Only the radio volume', 'Only the cabin temperature', 'Only the seat position']],
    ['What does eye tracking in the AI Driver Cabin check?', 'Eye movement and blink rate', ['Eye movement and blink rate', 'Eye colour', 'Reading speed', 'Sunglasses use']],
    ['What does fatigue detection do?', 'Detects drowsiness and inattentiveness and alerts the driver', ['Detects drowsiness and inattentiveness and alerts the driver', 'Plays music to keep the driver awake', 'Switches off the engine silently', 'Records only the speed']],
    ['What should a driver do when a drowsiness alert appears?', 'Stop at a safe place and rest', ['Stop at a safe place and rest', 'Ignore it and drive faster', 'Turn off the alert system', 'Open the window and continue']],
    ['Which tank readings are shown on the smart dashboard?', 'Pressure, temperature, GPS speed and tank level', ['Pressure, temperature, GPS speed and tank level', 'Only fuel price', 'Only tyre colour', 'Only radio station']],
    ['What does a pressure alert warn about?', 'Abnormal tank pressure', ['Abnormal tank pressure', 'A low phone battery', 'A tyre colour change', 'Heavy traffic']],
    ['What does a temperature alert warn about?', 'The tank temperature becoming too high', ['The tank temperature becoming too high', 'Cold weather outside', 'A hot meal', 'A cold engine only']],
    ['What does route monitoring do?', 'Alerts when the tanker deviates from the approved route', ['Alerts when the tanker deviates from the approved route', 'Chooses the cheapest toll road', 'Plays navigation music', 'Hides the route from the control room']],
    ['What does the SOS / Panic Button do?', 'Sends an instant alert to the control room in an emergency', ['Sends an instant alert to the control room in an emergency', 'Opens the cabin door', 'Increases speed', 'Turns on the radio']],
    ['What does 360° CCTV monitoring cover?', 'Front, rear, left and right views plus the cabin', ['Front, rear, left and right views plus the cabin', 'Only the front', 'Only the driver\u2019s face', 'Only the fuel gauge']],
    ['Where are live feeds and recordings from the tanker monitored?', 'In the connected control room', ['In the connected control room', 'Only at a petrol pump', 'Only at a toll booth', 'Nowhere']],
    ['What is a QR Emergency Placard used for?', 'Scanning for instant chemical and safety information', ['Scanning for instant chemical and safety information', 'Paying road tax', 'Booking a hotel', 'Playing a game']],
    ['Who benefits most from the QR placard during an accident?', 'First responders who need quick chemical information', ['First responders who need quick chemical information', 'Passing tourists only', 'Advertisers', 'Shop owners']],
    ['What UN number is shown for LPG on the placard?', 'UN 1075', ['UN 1075', 'UN 1203', 'UN 1950', 'UN 2000']],
    ['Which hazard class number is shown for flammable gas such as LPG?', 'Class 2.1', ['Class 2.1', 'Class 6.1', 'Class 8', 'Class 9']],
    ['What is the Hazchem code shown on the LPG placard?', '2WE', ['2WE', '9ZZ', '1AB', '5XY']],
    ['Which number should be dialled for the national emergency service?', '112', ['112', '999', '000', '411']],
    ['Which number is shown for Police in the safety posters?', '100', ['100', '101', '108', '1098']],
    ['Which number is shown for the Fire Service in the safety posters?', '101', ['101', '100', '102', '103']],
    ['Which standards does the QR placard say it complies with?', 'ADR, IMDG and GHS', ['ADR, IMDG and GHS', 'Only local shop rules', 'No standards', 'Only school rules']],
    ['Which item is part of the recommended PPE for chemical emergencies?', 'Respirator mask', ['Respirator mask', 'Party hat', 'Sunglasses only', 'Slippers']],
    ['What is the first-aid step for inhalation of gas?', 'Move the person to fresh air and keep them calm', ['Move the person to fresh air and keep them calm', 'Give them a heavy meal', 'Make them run', 'Keep them in the leak area']],
    ['What is the first-aid step for chemical contact with the skin?', 'Wash with plenty of water and soap', ['Wash with plenty of water and soap', 'Rub with a dry cloth', 'Apply oil', 'Cover without washing']],
    ['For how long should eyes be rinsed after chemical eye contact?', 'At least 15 minutes', ['At least 15 minutes', '10 seconds', '1 minute', 'Not at all']],
    ['What should you do if a chemical is swallowed?', 'Do not induce vomiting and seek immediate medical attention', ['Do not induce vomiting and seek immediate medical attention', 'Induce vomiting at once', 'Give a hot drink', 'Wait a day']],
    ['Which fire-fighting agent is suitable for LPG fires according to the placard?', 'Dry chemical powder or CO\u2082', ['Dry chemical powder or CO\u2082', 'A direct water jet on the leak', 'Sand thrown on a gas cylinder only', 'Cooking oil']],
    ['What should NOT be done to a gas leak?', 'Use a direct water jet on the gas leak', ['Use a direct water jet on the gas leak', 'Keep away from heat and sparks', 'Evacuate the area', 'Alert emergency services']],
    ['What should be kept away from a flammable gas leak?', 'Heat, sparks and open flames', ['Heat, sparks and open flames', 'Only children\u2019s toys', 'Only paper', 'Nothing']],
    ['How many safety layers does the Multi-Layer Safety System show around the tanker?', 'Multiple layers including AI, GPS, CCTV, siren, QR placard and fire safety', ['Multiple layers including AI, GPS, CCTV, siren, QR placard and fire safety', 'Only one layer', 'Only a speed limit', 'None']],
    ['What does GPS tracking provide in the multi-layer system?', 'Real-time location, geo-fencing and route deviation alerts', ['Real-time location, geo-fencing and route deviation alerts', 'Free music', 'Weather forecasts only', 'Tyre repair']],
    ['What does driver health monitoring check?', 'Heart rate, fatigue and drowsiness', ['Heart rate, fatigue and drowsiness', 'Favourite food', 'Shoe size', 'Driving licence colour']],
    ['What is the purpose of the onboard fire safety system?', 'Extinguishers, flame detection and auto-suppression', ['Extinguishers, flame detection and auto-suppression', 'Playing alarms for fun', 'Heating the cabin', 'Washing the tanker']],
    ['What role does the Highway Authority play?', 'Corridor management, traffic control and infrastructure monitoring', ['Corridor management, traffic control and infrastructure monitoring', 'Selling chemicals', 'Repairing phones', 'Printing tickets']],
    ['Why are there three blind-spot zones highlighted around a tanker?', 'Left side, right side and rear', ['Left side, right side and rear', 'Only the roof', 'Only the engine', 'Only the tyres']],
    ['What do AI cameras, radar and sensors do in blind-spot detection?', 'Detect vehicles in blind spots and alert the driver', ['Detect vehicles in blind spots and alert the driver', 'Increase engine noise', 'Lock the doors', 'Change the tyres']],
    ['What should other drivers do if they cannot see the truck driver in the mirror?', 'Keep clear, because the driver cannot see them', ['Keep clear, because the driver cannot see them', 'Stay beside the truck', 'Honk repeatedly', 'Overtake closely']],
    ['What is a safe driving practice around blind spots?', 'Check mirrors before changing lanes and use indicators', ['Check mirrors before changing lanes and use indicators', 'Change lanes without looking', 'Stay in the blind spot', 'Switch off indicators']],
    ['What are the Restricted Hours for hazardous chemical vehicles in the Chemical Corridor Clock?', '7:00 AM to 10:00 PM', ['7:00 AM to 10:00 PM', '10:00 PM to 7:00 AM', '12 noon to 2 PM', 'All 24 hours']],
    ['What are the recommended Safe Movement Hours?', '10:00 PM to 7:00 AM', ['10:00 PM to 7:00 AM', '7:00 AM to 10:00 PM', '8 AM to 9 AM', '5 PM to 6 PM']],
    ['Why is movement restricted during busy daytime hours?', 'To protect schools, colleges, hospitals and crowded areas', ['To protect schools, colleges, hospitals and crowded areas', 'To save fuel only', 'To avoid sunshine', 'To help advertising']],
    ['What is the minimum safe following distance behind a hazardous tanker?', '100\u2013150 metres', ['100\u2013150 metres', '1\u20132 metres', '5\u201310 metres', '20 metres']],
    ['Why should you not overtake a hazardous tanker unsafely?', 'It may stop suddenly and overtaking increases accident risk', ['It may stop suddenly and overtaking increases accident risk', 'Tankers never stop', 'Overtaking is always required', 'It saves fuel']],
    ['Why do hazardous tankers need more distance to stop?', 'They carry heavy dangerous loads', ['They carry heavy dangerous loads', 'They have no brakes', 'They are very small', 'They are always empty']],
    ['What is the first step of the Emergency Response Timeline (0\u20132 minutes)?', 'Detect and alert', ['Detect and alert', 'Recover and review', 'Control and contain', 'Respond and secure']],
    ['What happens in the second step, Assess and Dispatch (2\u20135 minutes)?', 'The control room verifies the situation and dispatches fire, police and ambulance teams', ['The control room verifies the situation and dispatches fire, police and ambulance teams', 'The case is closed', 'Everyone goes home', 'The cargo is sold']],
    ['What is done in the Respond and Secure step (5\u201315 minutes)?', 'Teams reach the site, secure the perimeter and evacuate people if needed', ['Teams reach the site, secure the perimeter and evacuate people if needed', 'The report is filed', 'Nothing is done', 'The tanker is repainted']],
    ['What happens in the last step, Recover and Review (60 minutes onwards)?', 'The area is declared safe, cleaned up and a root-cause report is made', ['The area is declared safe, cleaned up and a root-cause report is made', 'The leak starts', 'The alarm is switched on', 'The route is forgotten']],
    ['Which regular checks are part of the tanker fitness and safety checks?', 'Tyres, brakes, tank integrity, valves and lights', ['Tyres, brakes, tank integrity, valves and lights', 'Only paint colour', 'Only the horn tune', 'Only the seat cover']],
    ['What is the overall safety message of the hazardous tanker posters?', 'Awareness, responsibility and technology can prevent disasters and save lives', ['Awareness, responsibility and technology can prevent disasters and save lives', 'Speed matters most', 'Rules are optional', 'Accidents cannot be prevented']]
  ];

  // sanity: keep only questions whose correct answer is among the options
  Q = Q.filter(function (q) { return q[2].indexOf(q[1]) !== -1; });

  var CODE = 'hazardous_tanker', LABEL = 'Hazardous Tanker Safety';
  QUESTION_BANK[CODE] = Q;

  var i = LANGUAGES.findIndex(function (l) { return l[0] === 'topic9'; });
  if (i >= 0) LANGUAGES[i] = [CODE, LABEL]; else LANGUAGES.push([CODE, LABEL]);

  renderLangGrid();
})();
