const CATEGORIES = [
  {id:'classes', label:'Classes'},
  {id:'leveling', label:'Leveling'},
  {id:'metiers', label:'Métiers'},
  {id:'monde', label:'Monde'},
  {id:'donjons', label:'Donjons'},
  {id:'raids', label:'Raids'},
];

const POLLS = [
  {id:'cls-faction', category:'classes', question:"Quel faction préfères-tu ?", options:["Alliance","Horde"]},
  {id:'cls-nouvelles-races', category:'classes', question:"Veux-tu des nouvelles races/ classe ?", options:["Oui j'ai toujours voulu être un murloc","Non, Nain c'est trop beau","Pas encore décidé"]},
  {id:'cls-ally-classes', category:'classes', question:"Quelles classes veux tu voir côté alliance ?", options:["Nain chaman","Draeneï chaman","Une nouvelle"]},
  {id:'cls-horde-classes', category:'classes', question:"Quelles classes veux tu voir côté horde ?", options:["Tauren Paladin","Elfe de sang paladin","Une nouvelle"]},
  {id:'cls-nouvelles-classes', category:'classes', question:"Veux-tu des nouvelles classes dans le jeu ally et horde ?", options:["Oui oui Chauuuuuud","Non pas trop déjà avec 8 j'ai du mal"]},
  {id:'cls-raid-main', category:'classes', question:"En raid main tu veux jouer quoi ?", options:["Tank - BDSM","Heal - Je fais caca dans la nature","DPS Cac - Mes pieds sont si beaux","DPS Range - La presbytie mon pote","Support - Si ça sort"]},

  {id:'lvl-paliers', category:'leveling', question:"Voulez vous des paliers de leveling comme SOD ?", options:["Oui","Non","Osef"]},
  {id:'lvl-mode', category:'leveling', question:"Comment veux-tu faire ton leveling ?", options:["Solo","En duo","En groupe pour dormir dans les donjons"]},
  {id:'lvl-sac', category:'leveling', question:"Aimerais-tu qu'il soit possible d'avoir le sac de couchage ?", options:["Oui de ouf je suis un clochard","Non, je dors uniquement à l'auberge, surtout celle de comté de l'or"]},
  {id:'lvl-style', category:'leveling', question:"Quel style de leveling préférez-vous ?", options:["Quêtes classiques","Farm de mobs / grind","Enchaîner les donjons","Un mix des trois"]},

  {id:'met-choix', category:'metiers', question:"Quelles professions envisagez-vous ?", options:["Ingénieur","Forgeron","Travail du cuir","Couture","Enchantement","Alchimiste"]},
  {id:'met-priorite', category:'metiers', question:"Privilégierez-vous plutôt...", options:["Des métiers qui favoriserons le speedrun","Des métiers utiles au raid (Alchimie, Enchantement, Forge)","De la pure récolte (revenus, farm)","Peu importe, ce qui me plaît"]},
  {id:'met-entraide', category:'metiers', question:"Seriez-vous partant pour une organisation d'entraide entre métiers (échange de mats, crafts prioritaires) ?", options:["Oui, je serai le Elon Musk du serveur","parfois, j'ai peu de temps","Non, j'ai des oursins dans les poches"]},
  {id:'met-nouveau', category:'metiers', question:"Penses-tu que nous devrions avoir des nouveau métiers ?", options:["Oui bucheron c'est le feu","Non c'est déjà une purge"]},
  {id:'met-valorisation', category:'metiers', question:"Veux-tu une valorisation des métiers ?", options:["Oui les patrons pour la pluspart sont claqué sous-terre","Non le +9 esprit sur baton c'est si BÔ"]},

  {id:'monde-interet', category:'monde', question:"Qu'est-ce qui vous attire le plus dans le contenu monde ouvert ?", options:["World bosses","World PvP","Quêtes épiques / lore","Exploration / secrets cachés","Peu d'intérêt pour le monde ouvert"]},
  {id:'monde-events-jce', category:'monde', question:"Participeriez-vous à des sorties de guilde organisées en monde ouvert JCE (chasse aux world bosses, farm de montures rares, etc.) ?", options:["Oui, avec plaisir","Si les horaires me conviennent","Pas vraiment intéressé"]},
  {id:'monde-events-jcj', category:'monde', question:"Participeriez-vous à des sorties de guilde organisées JCJ (Tunnel à poil dans Ogrimmar) ?", options:["Oui, j'ai une passion pour tapé","Non j'ai des raisins de Corinthe"]},

  {id:'donj-lfg', category:'donjons', question:"Veux-tu que la recherche de groupe soit intégrer dans le jeu ?", options:["Oui ! Marché pendant 30 min ça me gonfle","Oui, mais juste pour grouper, j'aime parler en trajet","Non ! Trop fan du chan RDG"]},
  {id:'donj-format', category:'donjons', question:"Vous préférez faire vos donjons...", options:["En groupe de guilde","En groupe random / LFG","Peu importe, l'essentiel est de jouer"]},
  {id:'donj-hm', category:'donjons', question:"Serais-tu pour l'intégration des donjons HM ?", options:["Oui de ouf","Oui si l'ilvl est mieux que le normal et moins bon que le raid","Non, c'est nul"]},
  {id:'donj-mythic', category:'donjons', question:"Serais-tu pour l'intégration des donjons Mythic+ ?", options:["Oui c'est compétitif","Oui avec une restriction de l'Ilvl pour ne pas dépasser le raid","Non, c'est nul"]},
  {id:'donj-nouveaux', category:'donjons', question:"Souhaitez-vous plus de nouveau donjon comme la Crypte de Karazhan à SOD ?", options:["Oui oui et oui","Non"]},

  {id:'raid-speedrun', category:'raids', question:"Tu veux à nouveau la possibilité de faire du Speerun ?", options:["Oui, mon cerveau c'est ok","Oui mais pas toujours car ça épuise","Non ça va trop vite et trop cher"]},
  {id:'raid-role', category:'raids', question:"Quel rôle préférez-vous tenir en raid ?", options:["Tank","Soin","Dégâts (corps à corps)","Dégâts (distance)","Support"]},
  {id:'raid-format', category:'raids', question:"Quel format de raid tu veux voir sur Classic + ?", options:["10 joueurs uniquement","10 joueurs mini - Flex - 25 joueurs maxi","40 joueurs"]},
  {id:'raid-difficulte', category:'raids', question:"Aimerais-tu que Classic+ fasse un vrai système de difficulté de raid (Exemple : HM, Mythic) ?", options:["Oui grave chaud","Oui mais pas de la merde comme SOD","Non comme sur classic"]},
  {id:'raid-loot', category:'raids', question:"Quel système de loot vous semble le plus juste ?", options:["Loot au DKP","Loot conseil (officiers)","Master Loot libre","Peu importe, à voir ensemble"]},
];


/* =========================================================
   GRIMOIRE D'AZEROTH
   MODIFICATION DES QUESTIONS :
   correct = index de la bonne réponse (0=A, 1=B, 2=C, 3=D)
   points = gain si bonne réponse. Une mauvaise réponse ne
   retire jamais de points (voir grimoireSubmit plus bas) ;
   penalty est conservé dans les données mais vaut 0 partout.
   explanation = correction ; source = lien à vérifier
   ========================================================= */
const GRIMOIRE_DEADLINE='2026-09-10T23:59:59+02:00';
const GRIMOIRE_QUESTIONS=[
{id:'lore-01',difficulty:'easy',label:'Facile',question:"Quel est le véritable nom du dragon noir qui se fait passer pour Lady Katrana Prestor à Hurlevent ?",options:['Onyxia','Alexstrasza','Vaelastrasz','Sinestra'],correct:0,points:1,penalty:0,explanation:"Katrana Prestor est l'identité utilisée par Onyxia pour infiltrer la noblesse de Hurlevent.",source:'https://warcraft.wiki.gg/wiki/Onyxia_(Classic)'},
{id:'lore-02',difficulty:'easy',label:'Facile',question:"Quel est le boss final de Molten Core dans le WoW Classic original ?",options:["Majordomo Executus","Golemagg l'Incinerateur","Ragnaros","Garr"],correct:2,points:1,penalty:0,explanation:'Ragnaros le Seigneur du Feu est le boss final de Molten Core.',source:'https://warcraft.wiki.gg/wiki/Molten_Core'},
{id:'lore-03',difficulty:'easy',label:'Facile',question:"Quel dieu du sang les trolls Hakkari cherchent-ils à invoquer à Zul'Gurub ?",options:["G'huun",'Hakkar',"C'Thun","N'Zoth"],correct:1,points:1,penalty:0,explanation:"Les Hakkari et les Atal'ai sont liés au culte de Hakkar le Soulflayer.",source:'https://warcraft.wiki.gg/wiki/Zul_Gurub'},
{id:'lore-04',difficulty:'easy',label:'Facile',question:"Quel est le boss final de Blackwing Lair dans le Classic original ?",options:['Nefarian','Razorgore','Chromaggus','Vaelastrasz'],correct:0,points:1,penalty:0,explanation:"Nefarian, fils aîné de Deathwing, règne sur Blackwing Lair.",source:'https://warcraft.wiki.gg/wiki/Blackwing_Lair'},
{id:'lore-05',difficulty:'easy',label:'Facile',question:"Qui est le boss final de Naxxramas dans sa version originale à 40 joueurs ?",options:['Sapphiron',"Kel'Thuzad",'The Four Horsemen','Noth le Porte-Peste'],correct:1,points:1,penalty:0,explanation:'Kel\'Thuzad est l\'ultime rencontre de Naxxramas Classic.',source:'https://warcraft.wiki.gg/wiki/Naxxramas_(Classic)'},
{id:'lore-06',difficulty:'normal',label:'Normal',question:"Qui donne la quête « Dark Iron Legacy » liée à la Shadowforge Key dans Blackrock Mountain ?",options:['Fineous Darkvire','Franclorn Forgewright','Emperor Dagran Thaurissan','Magmus'],correct:1,points:2,penalty:0,explanation:"Le fantôme de Franclorn Forgewright donne la quête. Il faut être soi-même mort pour lui parler.",source:'https://warcraft.wiki.gg/wiki/Dark_Iron_Legacy'},
{id:'lore-07',difficulty:'normal',label:'Normal',question:"Avant de devenir le chef de la Confrérie des Défias, quel était le métier d'Edwin VanCleef ?",options:['Maître de la guilde des tailleurs','Maître de la guilde des maçons','Capitaine de la garde de Hurlevent','Conseiller de la Maison des Nobles'],correct:1,points:2,penalty:0,explanation:"Edwin VanCleef était le maître de la guilde des maçons, les Stonemasons, qui participèrent à la reconstruction de Hurlevent après la Première Guerre.",source:'https://warcraft.wiki.gg/wiki/Edwin_VanCleef'},
{id:'lore-08',difficulty:'normal',label:'Normal',question:"Lors de la reconstruction de Hurlevent, quel événement transforme le conflit entre les maçons et la noblesse en véritable révolte ?",options:["Les Défias attaquent directement Hurlevent","Une pierre lancée pendant l'émeute tue la reine Tiffin Wrynn","Varian Wrynn bannit les maçons sans procès","Les orcs reviennent attaquer la ville"],correct:1,points:2,penalty:0,explanation:"L'émeute des maçons dégénère et une pierre frappe mortellement la reine Tiffin Wrynn. Cet événement marque un tournant majeur dans l'histoire de VanCleef et des futurs Défias.",source:'https://warcraft.wiki.gg/wiki/A_Window_to_the_Past'},
{id:'lore-09',difficulty:'normal',label:'Normal',question:"Après avoir accusé Renault Mograine et Saidan Dathrohan d'avoir orchestré la mort d'Alexandros lors d'une réunion à Hearthglen, quel sort funeste s'abat sur High Inquisitor Fairbanks ?",options:["Il est accusé d'être infecté par le Fléau et emmené pour être exécuté","Il est nommé nouveau Grand Croisé de la Croisade","Il rejoint immédiatement l'Aube d'Argent sans être inquiété","Il est exilé à Tyr's Hand par Isillien"],correct:0,points:2,penalty:0,explanation:"Ses accusations ne sont pas écoutées : Fairbanks est soupçonné d'être infecté par la peste du Fléau et emmené pour être exécuté par les Croisés eux-mêmes.",source:'https://warcraft.wiki.gg/wiki/High_Inquisitor_Fairbanks'},
{id:'lore-10',difficulty:'normal',label:'Normal',question:"Quel Old God est directement au cœur de l'intrigue d'Ahn'Qiraj dans WoW Classic ?",options:["Yogg-Saron","N'Zoth","C'Thun","Y'Shaarj"],correct:2,points:2,penalty:0,explanation:"C'Thun est l'Ancien Dieu enfermé dans Ahn'Qiraj et constitue l'affrontement final du Temple d'Ahn'Qiraj en Classic.",source:'https://warcraft.wiki.gg/wiki/C%27Thun'},
{id:'lore-11',difficulty:'medium',label:'Moyenne',question:"Dans Uldaman, quel artefact des Titans est présenté comme contenant les secrets de la création des nains ?",options:['Les Disques de Norgannon',"Le Marteau de Khaz'goroth",'Le Sceptre des Sables changeants','La Tablette de Volonté'],correct:0,points:3,penalty:0,explanation:"Les Disques de Norgannon sont les immenses artefacts des Titans conservés au fond d'Uldaman. Ils sont liés aux secrets de la genèse des nains et des créations des Titans.",source:'https://warcraft.wiki.gg/wiki/Uldaman'},
{id:'lore-12',difficulty:'medium',label:'Moyenne',question:"Selon le lore de Classic, quelle était la nature originelle des ancêtres des nains avant qu'ils ne deviennent des êtres de chair ?",options:['Des esprits élémentaires','Des earthen, des êtres façonnés dans la pierre par les Titans','Des humains maudits par les Démonistes','Des troggs évolués'],correct:1,points:3,penalty:0,explanation:"Les earthen étaient des êtres de pierre façonnés par les Titans. Une transformation connue sous le nom de Curse of Flesh est ensuite liée à l'apparition des races mortelles, dont les nains.",source:'https://warcraft.wiki.gg/wiki/Earthen'},
{id:'lore-13',difficulty:'medium',label:'Moyenne',question:"Dans quelle ville les futurs fondateurs de la Croisade se sont-ils réunis, durant la Troisième Guerre, pour purifier le cristal noir qui deviendra le cœur de l'Ashbringer ?",options:['Southshore','Hearthglen',"Tyr's Hand",'Andorhal'],correct:0,points:3,penalty:0,explanation:"C'est à Southshore que Mograine, Abbendis et Isillien se sont réunis pour purifier le cristal à l'origine de l'Ashbringer, avant même la fondation officielle de la Croisade.",source:'https://wowpedia.fandom.com/wiki/Scarlet_Crusade'},
{id:'lore-14',difficulty:'medium',label:'Moyenne',question:"Quel peuple est devenu les Qiraji après avoir été transformé sous l'influence de C'Thun ?",options:['Les Vrykuls','Les Aqir',"Les Tol'vir",'Les Furbolgs'],correct:1,points:3,penalty:0,explanation:"Les Aqir installés dans la prison de C'Thun ont été progressivement altérés par son influence, donnant naissance aux Qiraji.",source:'https://warcraft.wiki.gg/wiki/C%27Thun'},
{id:'lore-15',difficulty:'medium',label:'Moyenne',question:"Quel groupe secret de mages et de fanatiques est particulièrement associé au culte des Anciens Dieux dans le lore de WoW Classic ?",options:['Le Cercle cénarien','Le Marteau du Crépuscule','La Croisade écarlate','Le SI:7'],correct:1,points:3,penalty:0,explanation:"Le Marteau du Crépuscule, Twilight's Hammer, est un culte fanatique consacré aux forces des Anciens Dieux et apparaît notamment autour de Silithus et d'Ahn'Qiraj.",source:'https://warcraft.wiki.gg/wiki/Twilight%27s_Hammer_cult'},
{id:'lore-16',difficulty:'hardcore',label:'Hardcore',question:"Quel événement de son enfance a profondément marqué Sally Whitemane et a nourri sa haine des morts-vivants ?",options:["Elle a vu sa famille succomber au Fléau et a dû affronter ses proches après leur transformation en morts-vivants","Elle a été capturée par les Orcs pendant la Deuxième Guerre et torturée à Blackrock","Elle a assisté à la chute de la Main d'argent lors de la mort d'Uther","Elle a été élevée par les Réprouvés avant de rejoindre Lordaeron"],correct:0,points:5,penalty:0,explanation:"Sally Whitemane a été confrontée très jeune au Fléau : sa famille a succombé à la peste des morts-vivants, et elle a dû détruire ses proches après leur transformation. Cette expérience a profondément alimenté sa haine du Fléau et son fanatisme contre les morts-vivants.",source:'https://warcraft.wiki.gg/wiki/Sally_Whitemane'},
{id:'lore-17',difficulty:'hardcore',label:'Hardcore',question:"Quel PNJ confie aux joueurs Alliance, dans les Hautes-Terres de Hillsbrad, la quête « In the Name of the Light » demandant de tuer le Commandant Écarlate Mograine ?",options:['Raleigh the Devout','Bragor Bloodfist','Magistrate Marduke','Prospector Ironband'],correct:0,points:5,penalty:0,explanation:"Raleigh the Devout donne cette quête côté Alliance ; côté Horde, c'est Bragor Bloodfist qui confie la même mission via « Into The Scarlet Monastery ».",source:'https://vanilla-wow-archive.fandom.com/wiki/Renault_Mograine'},
{id:'lore-18',difficulty:'hardcore',label:'Hardcore',question:"Pourquoi Ahn'Qiraj est-il particulièrement important dans l'histoire de C'Thun : que représentait le complexe avant son rôle de cité qiraji ?",options:['Une ancienne capitale humaine','Une station de recherche construite par les Titans','Un palais des dragons noirs','Une forteresse des elfes de la nuit'],correct:1,points:5,penalty:0,explanation:"Le complexe d'Ahn'Qiraj est décrit comme une ancienne station de recherche des Titans qui abritait C'Thun avant d'être occupé par les Aqir devenus les Qiraji.",source:'https://warcraft.wiki.gg/wiki/Ahn%27Qiraj'},
{id:'lore-19',difficulty:'hardcore',label:'Hardcore',question:"Quel est le lien correct entre les Titans, Uldaman et les Disques de Norgannon ?",options:["Les Titans ont créé Uldaman comme prison de Ragnaros et les Disques sont des armes","Uldaman est un ancien complexe des Titans où sont conservés les Disques, liés à leurs créations et à leur histoire","Uldaman a été construit par les Qiraji pour cacher les Disques","Les Disques ont été fabriqués par les nains après leur transformation"],correct:1,points:5,penalty:0,explanation:"Uldaman est un ancien complexe titanique. Les Disques de Norgannon y ont été conservés et contiennent des connaissances essentielles sur les créations et l'histoire des Titans.",source:'https://warcraft.wiki.gg/wiki/Uldaman'},
{id:'lore-20',difficulty:'hardcore',label:'Hardcore',question:"Parmi ces affirmations, laquelle décrit correctement les quatre Anciens Dieux associés à l'ancien Empire noir d'Azeroth ?",options:["C'Thun, Yogg-Saron, N'Zoth et Y'Shaarj","C'Thun, Hakkar, Ragnaros et Nefarian","C'Thun, Sargeras, N'Zoth et Yogg-Saron","Y'Shaarj, Hakkar, C'Thun et Deathwing"],correct:0,points:5,penalty:0,explanation:"Les quatre Anciens Dieux classiquement associés à l'ancien Empire noir sont C'Thun, Yogg-Saron, N'Zoth et Y'Shaarj. Attention : tous ne sont pas des boss de WoW Classic ; cette question porte sur le lore ancien lié à Azeroth.",source:'https://warcraft.wiki.gg/wiki/Old_God'}
];
function grimoireIsClosed(){return new Date()>new Date(GRIMOIRE_DEADLINE)}
function grimoireLetter(i){return String.fromCharCode(65+i)}

async function fetchGrimoireState(pseudo){
  try{
    const res = await fetch(`${API_URL}?action=grimoireState&pseudo=${encodeURIComponent(pseudo)}`);
    const data = await res.json();
    return {
      answers: (data && data.answers) ? data.answers : {},
      closed: !!(data && data.closed)
    };
  }catch(e){ console.error('fetch grimoire state error', e); return { answers:{}, closed:false }; }
}

async function postGrimoireAnswer(pseudo, questionId, chosenIndex){
  try{
    const res = await fetch(API_URL, {
      method:'POST',
      body: JSON.stringify({action:'grimoireAnswer', pseudo, questionId, chosenIndex})
    });
    return await res.json();
  }catch(e){ console.error('post grimoire answer error', e); return {}; }
}

async function fetchGrimoireLeaderboard(){
  try{
    const res = await fetch(`${API_URL}?action=grimoireLeaderboard`);
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  }catch(e){ console.error('fetch grimoire leaderboard error', e); return []; }
}

function grimoireScoreFromAnswers(answers){
  let score = 0;
  GRIMOIRE_QUESTIONS.forEach(q=>{
    const a = answers[q.id];
    if(a) score += a.delta;
  });
  return score;
}

function grimoireTitle(s){
  if(s>=50)return'Dieu du LFG';
  if(s>=45)return'Boss du Marché Noir';
  if(s>=40)return'Tank Ouin-Ouin';
  if(s>=35)return'Ninja Looteur';
  if(s>=30)return'Squatteur de banc';
  if(s>=25)return"Kebabier d'Orgrimmar";
  if(s>=20)return'Plongeur de Dalaran';
  if(s>=15)return'Anti-Murloc';
  if(s>=10)return'Ramasseur de crottes';
  if(s>=5)return'Peon en CDI';
  return'Aucun titre';
}

function grimoireBanner(answers){
  const n = GRIMOIRE_QUESTIONS.filter(q=>answers[q.id]).length;
  const s = grimoireScoreFromAnswers(answers);
  const total = GRIMOIRE_QUESTIONS.length;
  const p = Math.round(n/total*100);
  return `<div class="grimoire-banner"><div class="grimoire-kicker">Épreuve exceptionnelle · Aegis</div><h3>📜 Le Grimoire d'Azeroth</h3><p>20 questions sur le WoW Classic de la guilde. Certaines se répondent de mémoire. D'autres vont vous obliger à chercher.</p><div class="grimoire-deadline">Épreuve ouverte jusqu'au <strong>10 septembre 2026 à 23h59</strong></div><div class="grimoire-status"><div class="grimoire-stat"><b>${n}/${total}</b><span>Questions</span></div><div class="grimoire-stat"><b>${s}</b><span>Points</span></div><div class="grimoire-stat"><b>${grimoireTitle(s)}</b><span>Titre actuel</span></div></div><div class="grimoire-progress"><div class="grimoire-progress-fill" style="width:${p}%"></div></div><div class="grimoire-progress-label">${n} question${n>1?'s':''} validée${n>1?'s':''} sur ${total}</div></div>`;
}

const GRIMOIRE_TIME_PER_QUESTION = 45; // secondes (Facile / Normal / Moyenne)
const GRIMOIRE_TIME_HARDCORE = 58; // secondes, uniquement pour les questions Hardcore
function getGrimoireTime(q){ return q.difficulty === 'hardcore' ? GRIMOIRE_TIME_HARDCORE : GRIMOIRE_TIME_PER_QUESTION; }
let grimoireTimerHandle = null;

function stopGrimoireTimer(){
  if(grimoireTimerHandle){ clearInterval(grimoireTimerHandle); grimoireTimerHandle = null; }
}

function startGrimoireTimer(questionId, seconds){
  stopGrimoireTimer();
  let remaining = seconds || GRIMOIRE_TIME_PER_QUESTION;
  const el = document.getElementById('grimoire-timer-'+questionId);
  if(!el) return;
  const paint = () => {
    el.textContent = `⏱️ ${remaining}s`;
    el.classList.toggle('urgent', remaining <= 10);
  };
  paint();
  grimoireTimerHandle = setInterval(() => {
    remaining -= 1;
    if(remaining <= 0){
      stopGrimoireTimer();
      grimoireAutoSubmit(questionId);
      return;
    }
    paint();
  }, 1000);
}

function grimoireAutoSubmit(questionId){
  const s = document.getElementById('grimoire-submit-'+questionId);
  if(!s || s.disabled) return;
  // Le temps est écoulé : si rien n'était sélectionné, on scelle automatiquement la première option
  // (ça compte comme une réponse — donc potentiellement fausse — mais la question ne reste jamais bloquée).
  if(s.dataset.selected === undefined){
    grimoireSelect(questionId, 0);
  }
  grimoireSubmit(questionId);
}

function renderGrimoireQuestion(q,i,answers,live){
  const a = answers[q.id];
  const done = !!a;
  if(done){
    const ok = a.correct;
    const d = a.delta;
    return `<div class="grimoire-card ${q.difficulty}"><div class="grimoire-card-top"><span class="grimoire-number">Question ${i+1} / ${GRIMOIRE_QUESTIONS.length}</span><span class="grimoire-difficulty">Réponse scellée</span></div><div class="grimoire-question">${q.question}</div><div class="grimoire-options">${q.options.map((o,j)=>`<button type="button" class="grimoire-option${a.chosenIndex===j?' selected':''}" disabled><strong>${grimoireLetter(j)}.</strong> ${o}</button>`).join('')}</div><div class="grimoire-result ${ok?'good':'bad'}"><div class="grimoire-result-title">${ok?'🏆 Bonne réponse':'☠️ Mauvaise réponse'} · ${d>0?'+':''}${d} point${Math.abs(d)>1?'s':''}</div><p><strong>Bonne réponse : ${grimoireLetter(q.correct)}. ${q.options[q.correct]}</strong></p><p>${q.explanation}</p><a class="grimoire-source" href="${q.source}" target="_blank" rel="noopener noreferrer">Vérifier la source →</a></div></div>`;
  }
  const closed = grimoireIsClosed();
  const timerHtml = live ? `<span class="grimoire-timer" id="grimoire-timer-${q.id}">⏱️ ${getGrimoireTime(q)}s</span>` : (i===0 && !closed ? `<span class="grimoire-timer no-timer">🕊️ Pas de chrono sur cette question</span>` : '');
  return `<div class="grimoire-card ${q.difficulty}"><div class="grimoire-card-top"><span class="grimoire-number">Question ${i+1} / ${GRIMOIRE_QUESTIONS.length}</span><span class="grimoire-difficulty">${q.label} · +${q.points} pt${q.points>1?'s':''} si juste</span>${timerHtml}</div><div class="grimoire-question">${q.question}</div><div class="grimoire-options">${q.options.map((o,j)=>`<button type="button" class="grimoire-option" data-grimoire-option="${q.id}" data-index="${j}" ${closed?'disabled':''} onclick="grimoireSelect('${q.id}',${j})"><strong>${grimoireLetter(j)}.</strong> ${o}</button>`).join('')}</div><button type="button" class="grimoire-submit" id="grimoire-submit-${q.id}" disabled onclick="grimoireSubmit('${q.id}')">${closed ? 'Grimoire clos' : 'Sceller ma réponse'}</button></div>`;
}

async function renderGrimoire(){
  stopGrimoireTimer();
  const content = document.getElementById('grimoire-content');
  if(!content) return;
  const pseudo = getPseudo();

  if(!pseudo){
    content.innerHTML = `
      <div class="grimoire-card" style="text-align:center;">
        <p style="color:var(--text-dim); margin-bottom:20px;">Choisis un pseudo pour commencer le Grimoire.</p>
        <button class="cta" onclick="ensurePseudo(()=>renderGrimoire())">Choisir mon pseudo</button>
      </div>
    `;
    return;
  }

  content.innerHTML = `<div class="grimoire-card"><p style="color:var(--text-dim);">Chargement…</p></div>`;

  // Les 2 appels réseau ne dépendent pas l'un de l'autre : on les lance en parallèle
  // plutôt que l'un après l'autre, ce qui réduit nettement le temps d'attente perçu.
  const [state, leaderboard] = await Promise.all([
    fetchGrimoireState(pseudo),
    fetchGrimoireLeaderboard()
  ]);
  const answers = state.answers;
  let h = grimoireBanner(answers);
  h += `<div class="grimoire-rules"><strong>⚔️ Règles :</strong><br>Une seule réponse par question, scellée définitivement dès validation — impossible de revenir en arrière. Tu as <strong>${GRIMOIRE_TIME_PER_QUESTION} secondes</strong> pour répondre à chaque question (<strong>${GRIMOIRE_TIME_HARDCORE} secondes</strong> pour les questions ☠️ Hardcore) ; passé ce délai, la première option est automatiquement scellée. Une bonne réponse rapporte les points indiqués (Facile +1 · Normal +2 · Moyenne +3 · Hardcore +5). Une mauvaise réponse n'apporte ni ne retire aucun point. Les réponses sont partagées avec la guilde : le classement du Grimoire est visible par tout le monde.</div>`;

  const allAnswered = GRIMOIRE_QUESTIONS.every(q => answers[q.id]);
  // On croise la date locale ET le statut renvoyé par le serveur (source de vérité en cas de doute).
  const closed = grimoireIsClosed() || state.closed;

  if(closed && !allAnswered){
    const answeredCount = GRIMOIRE_QUESTIONS.filter(q=>answers[q.id]).length;
    h += `<div class="grimoire-locked"><strong>🔒 Le Grimoire est désormais fermé</strong>L'épreuve s'est terminée le 10 septembre 2026 à 23h59. Tu as répondu à ${answeredCount}/20 questions ; les réponses restent consultables ci-dessous.</div>`;
  }

  // Mode séquentiel : l'historique des questions déjà répondues est replié par défaut
  // (pour arriver directement sur la question en cours, sans avoir à scroller), et une
  // seule question active à la fois (avec chrono). Exception : la question n°1 (i===0)
  // n'a jamais de chrono, le temps de lire les règles.
  let liveQuestion = null;
  let liveHtml = '';
  let historyHtml = '';
  let answeredCount = 0;
  for(let i=0; i<GRIMOIRE_QUESTIONS.length; i++){
    const q = GRIMOIRE_QUESTIONS[i];
    if(answers[q.id]){
      historyHtml += renderGrimoireQuestion(q, i, answers, false);
      answeredCount++;
    } else if(!closed){
      const withTimer = i !== 0;
      liveHtml = renderGrimoireQuestion(q, i, answers, withTimer);
      if(withTimer) liveQuestion = q;
      break;
    } else {
      break;
    }
  }
  if(historyHtml){
    h += `<details class="grimoire-history"><summary>Voir mes ${answeredCount} réponse${answeredCount>1?'s':''} précédente${answeredCount>1?'s':''}</summary>${historyHtml}</details>`;
  }
  h += liveHtml;

  if(allAnswered){
    const s = grimoireScoreFromAnswers(answers);
    const recapRows = GRIMOIRE_QUESTIONS.map((q,idx)=>{
      const a = answers[q.id];
      const ok = a.correct;
      return `<div class="grimoire-recap-row ${ok?'good':'bad'}"><span class="grimoire-recap-num">Q${idx+1}</span><span class="grimoire-recap-q">${q.question}</span><span class="grimoire-recap-result">${ok?'✅':'❌'} ${a.delta>0?'+':''}${a.delta} pt${Math.abs(a.delta)>1?'s':''}</span></div>`;
    }).join('');
    const goodCount = GRIMOIRE_QUESTIONS.filter(q=>answers[q.id].correct).length;
    h += `<div class="grimoire-final"><div class="grimoire-final-score">${s}</div><div class="grimoire-final-title">${grimoireTitle(s)}</div><p>Tu as terminé les 20 épreuves du Grimoire d'Azeroth — ${goodCount}/20 bonnes réponses.</p><div class="grimoire-final-rules"><div><b>5</b>Faciles</div><div><b>5</b>Normales</div><div><b>5</b>Moyennes</div><div><b>5</b>Hardcore</div></div><div class="grimoire-recap-list">${recapRows}</div></div>`;
  }

  // Classement du Grimoire, toujours visible : c'est ce qui rend l'épreuve compétitive.
  const rowsHtml = leaderboard.length ? leaderboard.map((m,idx)=>{
    const isMe = m.pseudo.toLowerCase() === pseudo.toLowerCase();
    return `
      <div class="leaderboard-row ${isMe?'me':''}">
        <div class="lb-rank">${idx+1}</div>
        <div class="lb-info">
          <div class="lb-pseudo">${m.pseudo}${isMe?' (toi)':''}</div>
          <div class="lb-titre">${grimoireTitle(m.score)}</div>
        </div>
        <div class="lb-votes"><b>${m.score>0?'+':''}${m.score}</b> pts</div>
      </div>
    `;
  }).join('') : `<div class="leaderboard-empty">Personne n'a encore de score au Grimoire.</div>`;

  h += `<div class="page-head" style="padding-top:36px; padding-bottom:8px;"><h2 style="font-size:1.3rem;">Classement du Grimoire</h2></div><div class="leaderboard">${rowsHtml}</div>`;

  content.innerHTML = h;

  if(liveQuestion){
    startGrimoireTimer(liveQuestion.id, getGrimoireTime(liveQuestion));
  }
}

function grimoireSelect(id,index){
  if(grimoireIsClosed()) return;
  document.querySelectorAll(`[data-grimoire-option="${id}"]`).forEach(b=>b.classList.toggle('selected',parseInt(b.dataset.index,10)===index));
  const s = document.getElementById('grimoire-submit-'+id);
  if(s){ s.disabled=false; s.dataset.selected=String(index); }
}

async function grimoireSubmit(id){
  if(grimoireIsClosed()) return;
  const s = document.getElementById('grimoire-submit-'+id);
  if(!s || s.dataset.selected===undefined) return;
  const q = GRIMOIRE_QUESTIONS.find(x=>x.id===id);
  if(!q) return;
  const a = parseInt(s.dataset.selected, 10);
  if(!Number.isInteger(a) || a<0 || a>=q.options.length) return;

  stopGrimoireTimer();
  s.disabled = true;
  s.textContent = 'Envoi…';

  const pseudo = getPseudo();
  // Le serveur (Code.gs) recalcule lui-même la bonne réponse et le score :
  // on ne lui envoie que le choix du joueur, on ne fait pas confiance au client.
  await postGrimoireAnswer(pseudo, id, a);
  renderGrimoire();
}

let currentCat = 'classes';

// Paliers de titres : à personnaliser librement (ajoute/retire des lignes)
const TITLES = [
  {level:1,  title:"Noob"},
  {level:5,  title:"Tueur de sanglier"},
  {level:10, title:"Profiteur de TP"},
  {level:15, title:"Sac à PV"},
  {level:20, title:"Dieu très ancien"},
  {level:25, title:"Leroy Jenkins"},
];

function getTitleInfo(votes){
  let current = null, next = null;
  for(const t of TITLES){
    if(votes >= t.level) current = t;
    else { next = t; break; }
  }
  return {current, next};
}

let pendingAfterPseudo = null;

function getPseudo(){ return localStorage.getItem('aegis-pseudo'); }

function ensurePseudo(callback){
  const p = getPseudo();
  if(p){ callback(p); return; }
  pendingAfterPseudo = callback;
  document.getElementById('pseudo-input').value = '';
  document.getElementById('pseudo-modal').classList.add('open');
  document.getElementById('pseudo-input').focus();
}

function submitPseudo(){
  const input = document.getElementById('pseudo-input');
  const val = input.value.trim();
  if(!val){ input.focus(); return; }
  localStorage.setItem('aegis-pseudo', val);
  document.getElementById('pseudo-modal').classList.remove('open');
  if(pendingAfterPseudo){ const cb = pendingAfterPseudo; pendingAfterPseudo = null; cb(val); }
}

function changePseudo(){
  localStorage.removeItem('aegis-pseudo');
  ensurePseudo(()=>renderProfil());
}

function goTo(view){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+view).classList.add('active');
  document.getElementById('nav-home').classList.toggle('active', view==='home');
  document.getElementById('nav-polls').classList.toggle('active', view==='polls');
  document.getElementById('nav-profil').classList.toggle('active', view==='profil');
  document.getElementById('nav-classement').classList.toggle('active', view==='classement');
  if(document.getElementById('nav-grimoire')) document.getElementById('nav-grimoire').classList.toggle('active', view==='grimoire');
  window.scrollTo({top:0, behavior:'smooth'});
  if(view==='polls') renderPolls();
  if(view==='profil') renderProfil();
  if(view==='classement') renderClassement();
  if(view==='grimoire') renderGrimoire();
}

function renderCatTabs(){
  const wrap = document.getElementById('cat-tabs');
  wrap.innerHTML = '';
  CATEGORIES.forEach(c=>{
    const btn = document.createElement('button');
    btn.textContent = c.label;
    btn.className = c.id===currentCat ? 'active' : '';
    btn.onclick = ()=>{ currentCat=c.id; renderPolls(); };
    wrap.appendChild(btn);
  });
}

// Colle ici l'URL de ton Web App Google Apps Script (voir instructions de déploiement)
const API_URL = 'https://script.google.com/macros/s/AKfycbxkGvgQjgrFw4tGM0YNMasMJOocV3G6FwEK6MG45Em-xfaJn6qkAae_78tbOF2OBisQqQ/exec';

async function fetchResults(pollId){
  try{
    const res = await fetch(`${API_URL}?action=results&pollId=${encodeURIComponent(pollId)}`);
    const data = await res.json();
    return data || {};
  }catch(e){ console.error('fetch results error', e); return {}; }
}

async function sendVote(pollId, optionIndex, pseudo){
  try{
    const res = await fetch(API_URL, {
      method: 'POST',
      // Ne pas mettre de header 'Content-Type: application/json' ici :
      // ça évite une requête preflight que Apps Script ne gère pas.
      body: JSON.stringify({action:'vote', pollId, optionIndex, pseudo})
    });
    const data = await res.json();
    return data || {};
  }catch(e){ console.error('send vote error', e); return {}; }
}

async function fetchMemberStats(pseudo){
  try{
    const res = await fetch(`${API_URL}?action=memberStats&pseudo=${encodeURIComponent(pseudo)}`);
    const data = await res.json();
    return data || {votes:0};
  }catch(e){ console.error('fetch member stats error', e); return {votes:0}; }
}

async function fetchLeaderboard(){
  try{
    const res = await fetch(`${API_URL}?action=leaderboard`);
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  }catch(e){ console.error('fetch leaderboard error', e); return []; }
}

function countsToArray(poll, raw){
  return poll.options.map((_, i) => Number(raw[i]) || 0);
}

function getLocalVote(pollId){
  const v = localStorage.getItem('aegis-voted:' + pollId);
  return v === null ? null : parseInt(v, 10);
}
function setLocalVote(pollId, idx){
  localStorage.setItem('aegis-voted:' + pollId, String(idx));
}

function renderPolls(){
  renderCatTabs();
  const list = document.getElementById('polls-list');
  list.innerHTML = '';
  const filtered = POLLS.filter(p=>p.category===currentCat);
  filtered.forEach(poll=>{
    const card = document.createElement('div');
    card.className = 'poll-card';
    card.innerHTML = `
      <div class="poll-head" onclick="toggleCard('${poll.id}')">
        <h3>${poll.question}</h3>
        <span class="poll-meta" id="meta-${poll.id}">…</span>
      </div>
      <div class="poll-body" id="body-${poll.id}"></div>
    `;
    list.appendChild(card);
    initPoll(poll);
  });
}

function toggleCard(pollId){
  const body = document.getElementById('body-'+pollId);
  body.classList.toggle('open');
}

async function initPoll(poll){
  const body = document.getElementById('body-'+poll.id);
  const meta = document.getElementById('meta-'+poll.id);
  meta.textContent = '…';
  body.innerHTML = '<p style="color:var(--text-dim); font-size:0.85rem;">Chargement…</p>';

  const raw = await fetchResults(poll.id);
  const counts = countsToArray(poll, raw);
  const already = getLocalVote(poll.id);

  const total = counts.reduce((a,b)=>a+b,0);
  meta.textContent = total + (total>1 ? ' votes' : ' vote');

  if(already !== null){
    body.innerHTML = renderResults(poll, counts) +
      `<span class="voted-tag">Vous avez voté pour « ${poll.options[already]} »</span>`;
    return;
  }

  const optionsHtml = poll.options.map((opt,i)=>`
    <div class="opt-row" onclick="document.getElementById('${poll.id}-${i}').checked=true">
      <input type="radio" name="${poll.id}" id="${poll.id}-${i}" value="${i}">
      <label for="${poll.id}-${i}">${opt}</label>
    </div>
  `).join('');

  body.innerHTML = `
    ${optionsHtml}
    <button class="vote-btn" onclick="castVote('${poll.id}')">Voter</button>
  `;
}

async function castVote(pollId){
  const poll = POLLS.find(p=>p.id===pollId);
  const selected = document.querySelector(`input[name="${pollId}"]:checked`);
  if(!selected){
    alert('Choisissez une option avant de voter.');
    return;
  }
  const idx = parseInt(selected.value, 10);

  ensurePseudo(async (pseudo) => {
    const btn = document.querySelector(`#body-${pollId} .vote-btn`);
    if(btn){ btn.disabled = true; btn.textContent = 'Envoi…'; }

    const raw = await sendVote(pollId, idx, pseudo);
    setLocalVote(pollId, idx);

    const counts = countsToArray(poll, raw.results || {});
    const total = counts.reduce((a,b)=>a+b,0);
    document.getElementById('meta-'+pollId).textContent = total + (total>1 ? ' votes' : ' vote');

    const body = document.getElementById('body-'+pollId);
    body.innerHTML = renderResults(poll, counts) +
      `<span class="voted-tag">Vous avez voté pour « ${poll.options[idx]} »</span>`;
    body.classList.add('open');
  });
}

function renderResults(poll, counts){
  const total = counts.reduce((a,b)=>a+b,0);
  const rows = poll.options.map((opt,i)=>{
    const pct = total>0 ? Math.round((counts[i]/total)*100) : 0;
    return `
      <div class="bar-row">
        <div class="bar-label"><span>${opt}</span><b>${pct}% · ${counts[i]}</b></div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
      </div>
    `;
  }).join('');
  return `<div class="results"><div class="kpi-total"><span>${total}</span> ${total>1?'votes':'vote'} au total</div>${rows}</div>`;
}

async function renderProfil(){
  const content = document.getElementById('profil-content');
  const pseudo = getPseudo();

  if(!pseudo){
    content.innerHTML = `
      <div class="profil-card">
        <p style="color:var(--text-dim); margin-bottom:20px;">Tu n'as pas encore de pseudo enregistré. Choisis-en un pour suivre ta progression.</p>
        <button class="cta" onclick="ensurePseudo(()=>renderProfil())">Choisir mon pseudo</button>
      </div>
    `;
    return;
  }

  content.innerHTML = `<div class="profil-card"><p style="color:var(--text-dim);">Chargement…</p></div>`;

  const stats = await fetchMemberStats(pseudo);
  const votes = stats.votes || 0;
  const {current, next} = getTitleInfo(votes);
  const nextLevel = next ? next.level : null;
  const prevLevel = current ? current.level : 0;
  const span = nextLevel ? (nextLevel - prevLevel) : 1;
  const progressPct = nextLevel ? Math.min(100, Math.round(((votes - prevLevel) / span) * 100)) : 100;

  const titresHtml = TITLES.map(t => `
    <div class="titre-chip ${votes >= t.level ? 'unlocked' : ''}">
      <b>Niveau ${t.level}</b>${t.title}
    </div>
  `).join('');

  content.innerHTML = `
    <div class="profil-card">
      <div class="profil-pseudo">${pseudo}</div>
      <div class="profil-titre">${current ? current.title : 'Sans titre'}</div>
      <div class="profil-niveau">${votes}</div>
      <div class="profil-niveau-label">${votes>1?'VOTES · NIVEAU':'VOTE · NIVEAU'} ${votes}</div>
      <div class="profil-progress-track"><div class="profil-progress-fill" style="width:${progressPct}%"></div></div>
      <div class="profil-progress-label">${nextLevel ? `${nextLevel - votes} vote${nextLevel-votes>1?'s':''} avant « ${next.title} » (niveau ${nextLevel})` : 'Titre maximum atteint !'}</div>
      <button class="profil-change" onclick="changePseudo()">Ce n'est pas moi, changer de pseudo</button>
    </div>
    <div class="titres-list">${titresHtml}</div>
  `;
}

async function renderClassement(){
  const content = document.getElementById('classement-content');
  content.innerHTML = `<div class="leaderboard"><div class="leaderboard-empty">Chargement…</div></div>`;

  const members = await fetchLeaderboard();
  const myPseudo = getPseudo();

  if(!members.length){
    content.innerHTML = `<div class="leaderboard"><div class="leaderboard-empty">Personne n'a encore voté. Sois le premier !</div></div>`;
    return;
  }

  const rows = members.map((m, i) => {
    const {current} = getTitleInfo(m.votes || 0);
    const isMe = myPseudo && m.pseudo.toLowerCase() === myPseudo.toLowerCase();
    return `
      <div class="leaderboard-row ${isMe ? 'me' : ''}">
        <div class="lb-rank">${i+1}</div>
        <div class="lb-info">
          <div class="lb-pseudo">${m.pseudo}${isMe ? ' (toi)' : ''}</div>
          <div class="lb-titre">${current ? current.title : 'Sans titre'}</div>
        </div>
        <div class="lb-votes"><b>${m.votes}</b> niveau</div>
      </div>
    `;
  }).join('');

  content.innerHTML = `<div class="leaderboard">${rows}</div>`;
}

goTo('home');
