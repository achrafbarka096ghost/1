const STORAGE_KEY = 'bacstudy-state-v1';

const COURS_DATA = {
  svt: [
    {
      id: 'svt1',
      num: 1,
      title: 'La neurophysiologie',
      sub: 'Influx nerveux · Synapse · Arc réflexe',
      prog: 85,
      badge: 'badge-purple',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'La neurophysiologie étudie le fonctionnement du système nerveux. Un neurone est une cellule excitable capable de transmettre un signal électrique appelé potentiel d\'action.' },
        { type: 'section', title: '1. Le potentiel d\'action', text: 'Au repos, l\'intérieur du neurone est négatif (−70 mV). Une stimulation suffisante ouvre les canaux Na⁺ : la membrane se dépolarise puis se repolarise.', items: ['Potentiel de repos : −70 mV', 'Seuil de déclenchement : −55 mV', 'Dépolarisation : entrée massive de Na⁺', 'Repolarisation : sortie de K⁺', 'Hyperpolarisation transitoire avant retour au repos'] },
        { type: 'formula', lines: ['Loi du tout ou rien :', 'Si stimulus ≥ seuil → potentiel d\'action COMPLET', 'Si stimulus < seuil → pas de réponse'] },
        { type: 'section', title: '2. La transmission synaptique', text: 'La synapse est la zone de communication entre deux neurones. La transmission est chimique et unidirectionnelle.', items: ['Neurone pré-synaptique libère des vésicules', 'Neurotransmetteurs traversent la fente synaptique', 'Fixation sur récepteurs du neurone post-synaptique', 'Effet excitateur (PPSE) ou inhibiteur (PPSI)', 'Dégradation enzymatique du neurotransmetteur'] },
        { type: 'tip', text: 'Astuce Bac : la sérotonine et la dopamine sont des neurotransmetteurs importants, l\'acétylcholine est libérée à la jonction neuromusculaire.' },
        { type: 'section', title: '3. L\'arc réflexe', text: 'Un réflexe est une réponse motrice involontaire et rapide. Le circuit emprunte : récepteur → neurone afférent → centre nerveux → neurone efférent → effecteur.' },
        { type: 'warning', text: 'À ne pas confondre : réflexe myotatique (monosynaptique) et réflexe de flexion (polysynaptique avec interneurones).' }
      ]
    },
    {
      id: 'svt2',
      num: 2,
      title: 'La génétique',
      sub: 'Mitose · Méiose · Hérédité mendélienne',
      prog: 70,
      badge: 'badge-teal',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'La génétique étudie la transmission des caractères héréditaires. Chaque cellule humaine contient 46 chromosomes (23 paires).' },
        { type: 'section', title: '1. La mitose', text: 'Division cellulaire qui produit 2 cellules filles génétiquement identiques à la cellule mère.', items: ['Prophase : condensation des chromosomes', 'Métaphase : alignement à l\'équateur', 'Anaphase : séparation des chromatides sœurs vers les pôles', 'Télophase : formation de 2 noyaux fils'] },
        { type: 'section', title: '2. La méiose', text: 'Division qui produit 4 cellules haploïdes différentes et assure la diversité génétique.', items: ['Méiose I : séparation des chromosomes homologues', 'Méiose II : séparation des chromatides sœurs', 'Crossing-over en prophase I', 'Résultat : 4 cellules haploïdes différentes'] },
        { type: 'formula', lines: ['Mitose : 2n → 2 × 2n (identiques)', 'Méiose : 2n → 4 × n (différentes)', 'Humain : 2n = 46, n = 23'] },
        { type: 'section', title: '3. Les lois de Mendel', text: 'Mendel a établi les lois de la transmission des caractères à partir d\'expériences sur des pois.', items: ['1ère loi : uniformité des hybrides F1', '2ème loi : ségrégation des allèles en F2', '3ème loi : indépendance des gènes non liés'] },
        { type: 'tip', text: 'Utilise l\'échiquier de Punnett pour réduire les erreurs dans les exercices.' }
      ]
    },
    {
      id: 'svt3',
      num: 3,
      title: 'L\'immunologie',
      sub: 'Réponse immunitaire · Anticorps · Vaccination',
      prog: 55,
      badge: 'badge-purple',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'Le système immunitaire protège l\'organisme contre les agents pathogènes. Il distingue le soi du non-soi grâce aux antigènes.' },
        { type: 'section', title: '1. Immunité innée', text: 'Première ligne de défense, rapide et non spécifique.', items: ['Barrières physiques : peau, muqueuses', 'Réaction inflammatoire', 'Phagocytose par macrophages et neutrophiles', 'Protéines du complément'] },
        { type: 'section', title: '2. Immunité adaptative', text: 'Réponse lente mais spécifique, avec mémoire immunologique.', items: ['Réponse humorale : lymphocytes B → plasmocytes → anticorps', 'Réponse cellulaire : lymphocytes T cytotoxiques', 'LT auxiliaires coordonnent la réponse', 'Cellules mémoires'] },
        { type: 'formula', lines: ['Anticorps = immunoglobulines', 'Structure en Y : 2 chaînes lourdes + 2 chaînes légères', 'Paratope fixe l\'épitope', 'Épitope = partie reconnue de l\'antigène'] },
        { type: 'tip', text: 'La vaccination crée une mémoire immunologique sans provoquer la maladie.' }
      ]
    },
    {
      id: 'svt4',
      num: 4,
      title: 'La digestion',
      sub: 'Enzymes digestives · Absorption intestinale',
      prog: 40,
      badge: 'badge-teal',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'La digestion transforme les aliment en nutriments absorbables par les cellules intestinales.' },
        { type: 'section', title: '1. Enzymes digestives', text: 'Chaque enzyme est spécifique à un substrat et a un pH optimal.', items: ['Amylase salivaire : amidon → maltose', 'Pepsine gastrique : protéines → peptides', 'Lipase pancréatique : lipides → AC + glycérol', 'Trypsine : protéines → acides aminés'] },
        { type: 'formula', lines: ['Glucides → glucose', 'Protéines → acides aminés', 'Lipides → acides gras + glycérol', 'La bile émulsifie les lipides'] },
        { type: 'section', title: '2. Absorption intestinale', text: 'Les nutriments traversent les villosités intestinales vers le sang ou la lymphe.', items: ['Glucose et AA → sang (veine porte)', 'AG → lymphe (chylifères)', 'Villositès multiplient la surface d\'absorption', 'Capillaires et chylifère dans chaque villosité'] },
        { type: 'tip', text: 'Les villosités multiplient la surface d\'absorption par environ 600.' }
      ]
    },
    {
      id: 'svt5',
      num: 5,
      title: 'La reproduction',
      sub: 'Gamètes · Fécondation · Développement',
      prog: 30,
      badge: 'badge-amber',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'La reproduction sexuée assure la diversité génétique des espèces.' },
        { type: 'section', title: '1. Gamétogenèse', text: 'Formation des gamètes dans les gonades.', items: ['Spermatogenèse : spermatogonies → spermatozoïdes', 'Ovogenèse : ovocyte I bloqué en prophase I', 'Ovocyte II libéré à l\'ovulation', 'Méiose II complète après fécondation'] },
        { type: 'section', title: '2. Fécondation', text: 'Union du spermatozoïde et de l\'ovule dans la trompe de Fallope.', items: ['Acrosome libère des enzymes', 'Réaction corticale empêche la polyspermie', 'Formation du zygote 2n = 46', 'Début de la segmentation'] },
        { type: 'section', title: '3. Développement embryonnaire', text: 'Le zygote donne progressivement morula puis blastocyste.', items: ['Zygote → morula → blastocyste', 'Gastrulation forme 3 feuillets', 'Nidation dans l\'endomètre J6-J10', 'HCG maintient le corps jaune'] }
      ]
    }
  ],
  pc: [
    {
      id: 'pc1',
      num: 1,
      title: 'Mécanique',
      sub: 'Lois de Newton · Énergie · Oscillateurs',
      prog: 75,
      badge: 'badge-teal',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'La mécanique classique décrit le mouvement des corps macroscopiques.' },
        { type: 'section', title: '1. Lois de Newton', items: ['Inertie : ΣF = 0', 'Fundamentale : ΣF = m·a', 'Action-réaction : F₁₂ = −F₂₁'] },
        { type: 'formula', lines: ['ΣF = m·a', 'P = m·g', 'Frottement : f = μ·N'] },
        { type: 'section', title: '2. Énergie mécanique', items: ['Ec = ½mv²', 'Ep = mgh', 'Em = Ec + Ep', 'Conservation si forces conservatives'] },
        { type: 'formula', lines: ['Ec = ½mv²', 'Ep = mgh', 'Em = constante (sans frottement)'] },
        { type: 'section', title: '3. Oscillateurs', items: ['Équation : ẍ + (k/m)x = 0', 'Période ressort : T = 2π√(m/k)', 'Pendule : ω = √(g/L)'] }
      ]
    },
    {
      id: 'pc2',
      num: 2,
      title: 'Électricité',
      sub: 'RC · RL · RLC · Régimes transitoires',
      prog: 60,
      badge: 'badge-purple',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'L\'électricité étudie le comportement des circuits et des composants.' },
        { type: 'section', title: '1. Condensateur', items: ['q = C·u', 'i = C·du/dt', 'E = ½Cu²'] },
        { type: 'formula', lines: ['u_C(t) = E(1 − e^{−t/τ})', 'τ = RC', 'i(t) = (E/R)(1 − e^{−t/τ})'] },
        { type: 'section', title: '2. Bobine', items: ['u_L = L·di/dt', 'E_L = ½Li²', 'En DC : u_L = 0'] },
        { type: 'formula', lines: ['i(t) = (E/R)(1 − e^{−t/τ})', 'τ = L/R'] },
        { type: 'section', title: '3. Circuit RLC', items: ['Équation : Lq̈ + Rq̇ + q/C = E', 'Sans R : oscillations libres', 'Amorti si R > 0'] }
      ]
    },
    {
      id: 'pc3',
      num: 3,
      title: 'Thermodynamique',
      sub: 'Principes · Entropie · Machines',
      prog: 45,
      badge: 'badge-amber',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'La thermodynamique étudie les échanges d\'énergie entre système et environnement.' },
        { type: 'section', title: '1. Premier principe', items: ['ΔU = W + Q', 'W positif si reçu par le système', 'Q positif si absorbé'] },
        { type: 'formula', lines: ['ΔU = W + Q', 'Isotherme : ΔU = 0', 'Adiabatique : Q = 0'] },
        { type: 'section', title: '2. Deuxième principe', items: ['Chaleur va du chaud au froid', 'Entropie augmente', 'Rendement ≤ Carnot'] },
        { type: 'formula', lines: ['η = |W|/|Q₁|', 'η_Carnot = 1 − T_f/T_c'] }
      ]
    },
    {
      id: 'pc4',
      num: 4,
      title: 'Chimie organique',
      sub: 'Fonctions oxygénées · Oxydation · Esters',
      prog: 50,
      badge: 'badge-purple',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'La chimie organique s\'intéresse aux composés du carbone et à leurs fonctions.' },
        { type: 'section', title: '1. Fonctions oxygénées', items: ['Alcool : −OH', 'Aldéhyde : −CHO', 'Cétone : C=O', 'Acide carboxylique : −COOH', 'Ester : −COO−'] },
        { type: 'section', title: '2. Oxydation des alcools', items: ['Primaire → aldéhyde → acide', 'Secondaire → cétone', 'Tertiaire : ne s\'oxyde pas facilement'] },
        { type: 'formula', lines: ['R-COOH + R\'OH ⇌ R-COO-R\' + H₂O', 'Saponification : R-COO-R\' + NaOH → R-COONa + R\'OH'] },
        { type: 'tip', text: 'Identifie la chaîne principale puis la fonction prioritaire pour bien nommer une molécule.' }
      ]
    },
    {
      id: 'pc5',
      num: 5,
      title: 'Cinétique chimique',
      sub: 'Vitesse · Ordre · Catalyse',
      prog: 35,
      badge: 'badge-red',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'La cinétique chimique étudie la vitesse des réactions et les facteurs qui l\'influent.' },
        { type: 'section', title: '1. Vitesse de réaction', items: ['v = −(1/a)d[A]/dt', 'Ordre 0 : [A] = [A]₀ − kt', 'Ordre 1 : ln[A] = ln[A]₀ − kt'] },
        { type: 'formula', lines: ['t₁/₂ = ln(2)/k pour ordre 1', 't₁/₂ = 1/(k[A]₀) pour ordre 2', 'k = A·e^{−Ea/RT}'] },
        { type: 'section', title: '2. Facteurs cinétiques', items: ['Température : k augmente', 'Concentration : plus de collisions', 'Catalyseur : abaisse Ea', 'Surface de contact pour solides'] },
        { type: 'warning', text: 'Le catalyseur n\'est pas consommé et n\'agit pas sur l\'équilibre chimique.' }
      ]
    }
  ],
  maths: [
    {
      id: 'm1',
      num: 1,
      title: 'Analyse — Limites et continuité',
      sub: 'Limites · Asymptotes · Continuité',
      prog: 80,
      badge: 'badge-purple',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'L\'analyse est le cœur des maths au Bac : limites, dérivées, intégrales.' },
        { type: 'section', title: '1. Limites', items: ['sin x/x → 1 en 0', 'e^x / x^n → +∞', 'ln x / x → 0', 'Formes indéterminées : 0/0, ∞/∞'] },
        { type: 'formula', lines: ['lim(x→0) sin x / x = 1', 'lim(x→+∞) ln x / x = 0'] },
        { type: 'section', title: '2. Dérivation', items: ['(x^n)\' = n x^{n-1}', '(e^x)\' = e^x', '(ln x)\' = 1/x', '(uv)\' = u\'v + uv\''] },
        { type: 'section', title: '3. Intégration', items: ['∫x^n dx = x^{n+1}/(n+1) + C', '∫1/x dx = ln|x| + C', '∫e^x dx = e^x + C'] }
      ]
    },
    {
      id: 'm2',
      num: 2,
      title: 'Suites numériques',
      sub: 'Arithmétique · Géométrique · Limites',
      prog: 65,
      badge: 'badge-teal',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'Une suite est une fonction définie sur N. Les suites arithmétiques et géométriques sont clés.' },
        { type: 'section', title: '1. Suite arithmétique', items: ['u_n = u_0 + n·r', 'Somme : n(u_0 + u_{n-1})/2', 'Croissance si r > 0'] },
        { type: 'formula', lines: ['u_n = u_0 + n·r', 'S_n = n(u_1 + u_n)/2'] },
        { type: 'section', title: '2. Suite géométrique', items: ['u_n = u_0·q^n', 'Somme : u_1(1 − q^n)/(1 − q)', '|q| < 1 → convergente'] }
      ]
    },
    {
      id: 'm3',
      num: 3,
      title: 'Probabilités',
      sub: 'Variables · Binomiale · Normale',
      prog: 55,
      badge: 'badge-amber',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'Les probabilités modélisent les phénomènes aléatoires et leurs résultats possibles.' },
        { type: 'section', title: '1. Variable aléatoire', items: ['E(X) = Σx p(x)', 'V(X) = E(X^2) − E(X)^2', 'σ = √V(X)', 'E(aX+b) = aE(X)+b'] },
        { type: 'section', title: '2. Loi binomiale', items: ['X ~ B(n,p)', 'P(X=k)=C(n,k)p^k(1-p)^{n-k}', 'E= np', 'V = np(1-p)'] },
        { type: 'formula', lines: ['P(X=k) = C_n^k p^k (1-p)^{n-k}', 'E(X) = np', 'V(X) = np(1-p)'] },
        { type: 'section', title: '3. Loi normale', items: ['Symétrique autour de μ', '68% dans [μ±σ]', '95% dans [μ±2σ]', '99,7% dans [μ±3σ]'] }
      ]
    },
    {
      id: 'm4',
      num: 4,
      title: 'Géométrie dans l\'espace',
      sub: 'Vecteurs · Plans · Droites',
      prog: 40,
      badge: 'badge-red',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'La géométrie dans l\'espace étudie les relations entre points, droites et plans en 3D.' },
        { type: 'section', title: '1. Repère et vecteurs', items: ['Coordonnées M(x,y,z)', 'AB = B − A', '|AB| = √((Δx)^2+(Δy)^2+(Δz)^2)', 'u·v = x1x2+y1y2+z1z2'] },
        { type: 'formula', lines: ['u·v = |u|·|v|·cosθ', 'u ⟂ v ↔ u·v = 0'] },
        { type: 'section', title: '2. Plan et droite', items: ['Plan : ax+by+cz+d=0', 'Droite paramétrique : A + t·u', 'Distance d\'un point à un plan', 'Droites parallèles ou sécantes'] }
      ]
    },
    {
      id: 'm5',
      num: 5,
      title: 'Équations différentielles',
      sub: 'Ordre 1 · Ordre 2 · Applications',
      prog: 50,
      badge: 'badge-teal',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'Les équations différentielles relient une fonction et ses dérivées et modélisent de nombreux phénomènes.' },
        { type: 'section', title: '1. Ordre 1', items: ['y\' + ay = b', 'Solution homogène y_h = K e^{-at}', 'Solution générale y = K e^{-at} + b/a'] },
        { type: 'formula', lines: ['y\' + ay = 0 → y = K e^{-at}', 'y\' + ay = b → y = K e^{-at} + b/a'] },
        { type: 'section', title: '2. Ordre 2', items: ["y'' + ω_0^2 y = 0", 'Solution : A cos(ω_0 t) + B sin(ω_0 t)', "Amorti : y'' + 2λy' + ω_0^2 y = 0"] }
      ]
    }
  ],
  philo: [
    {
      id: 'ph1',
      num: 1,
      title: 'La liberté',
      sub: 'Déterminisme · Libre arbitre · Responsabilité',
      prog: 50,
      badge: 'badge-purple',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'La liberté est une grande question philosophique : sommes-nous libres ou déterminés ?' },
        { type: 'section', title: '1. Le déterminisme', text: 'Tout événement serait causalement déterminé selon le déterminisme.', items: ['Déterminisme physique : lois de la nature', 'Déterminisme psychologique : désirs causés', 'Démon de Laplace : prédiction totale', 'Spinoza : les hommes se croient libres'] },
        { type: 'section', title: '2. Le libre arbitre', text: 'Descartes et Kant défendent une liberté de la volonté irréductible.', items: ['Descartes : la volonté peut dire non', 'Kant : liberté transcendantale', 'Sartre : existence précède essence', 'Responsabilité nécessite liberté'] },
        { type: 'tip', text: 'Dissertation : thèse → antithèse → synthèse. Présente un exemple concret pour convaincre.' }
      ]
    },
    {
      id: 'ph2',
      num: 2,
      title: 'La conscience',
      sub: 'Conscience de soi · Inconscient · Identité',
      prog: 45,
      badge: 'badge-teal',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'La conscience permet de se percevoir comme sujet distinct du monde.' },
        { type: 'section', title: '1. Conscience de soi', items: ['Descartes : cogito ergo sum', 'Locke : identité = continuité de la conscience', 'Hegel : reconnaissance de l\'autre', 'Conscience réflexive'] },
        { type: 'section', title: '2. L\'inconscient', text: 'Freud montre qu\'un inconscient psychique influence le comportement.', items: ['Ça / Moi / Surmoi', 'Refoulement', 'Rêves et lapsus', 'Inconscient contre toute maîtrise consciente'] }
      ]
    },
    {
      id: 'ph3',
      num: 3,
      title: 'La vérité',
      sub: 'Vérité scientifique · Relativisme · Certitude',
      prog: 35,
      badge: 'badge-amber',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'La vérité se distingue de l\'opinion : comment la reconnaître ?' },
        { type: 'section', title: '1. Théories de la vérité', items: ['Correspondance : vérité et réalité', 'Cohérence : cohérence interne', 'Pragmatisme : utile = vrai', 'Falsifiabilité de Popper'] },
        { type: 'section', title: '2. Science et relativisme', items: ['Popper : réfutabilité', 'Kuhn : paradigmes et révolutions', 'Relativisme : vérité dépend du contexte', 'Opinion vs connaissance'] }
      ]
    },
    {
      id: 'ph4',
      num: 4,
      title: 'La morale',
      sub: 'Normes · Devoir · Liberté',
      prog: 30,
      badge: 'badge-red',
      sections: [
        { type: 'intro', title: 'Introduction', text: 'La morale détermine ce qui est juste et ce qui est permis dans nos actions.' },
        { type: 'section', title: '1. Devoir et obligation', items: ['Kant : agir par devoir', 'Hume : sentiment moral', 'Utilitarisme : maximiser le bien-être'] },
        { type: 'section', title: '2. Liberté et responsabilité', items: ['Responsabilité morale suppose liberté', 'Responsabilité collective et individuelle', 'Notion de devoir envers autrui'] }
      ]
    }
  ]
};

const QUIZ_DATA = [
  { mat: 'svt', q: 'Quel ion provoque la dépolarisation lors du potentiel d\'action ?', opts: ['K⁺', 'Ca²⁺', 'Na⁺', 'Cl⁻'], ans: 2 },
  { mat: 'svt', q: 'La mitose produit :', opts: ['4 cellules haploïdes', '2 cellules diploïdes identiques', '4 cellules diploïdes', '2 cellules haploïdes'], ans: 1 },
  { mat: 'svt', q: 'Lors de la méiose I, il y a séparation des :', opts: ['Chromatides sœurs', 'Chromosomes homologues', 'Cellules filles', 'Centromères'], ans: 1 },
  { mat: 'svt', q: 'Les anticorps sont sécrétés par :', opts: ['Lymphocytes T', 'Macrophages', 'Plasmocytes', 'Neutrophiles'], ans: 2 },
  { mat: 'svt', q: 'La vaccination crée :', opts: ['Une immunité innée', 'Des cellules mémoires', 'Des macrophages', 'Des globules rouges'], ans: 1 },
  { mat: 'svt', q: 'La nidation a lieu :', opts: ['Dans la trompe', 'Dans l\'endomètre', 'Dans l\'ovaire', 'Dans le col'], ans: 1 },
  { mat: 'pc', q: 'La constante de temps τ d\'un circuit RC est :', opts: ['τ = R/C', 'τ = RC', 'τ = R+C', 'τ = √(RC)'], ans: 1 },
  { mat: 'pc', q: 'La 2ème loi de Newton s\'écrit :', opts: ['E = mc²', 'ΣF = mv', 'ΣF = ma', 'P = mv'], ans: 2 },
  { mat: 'pc', q: 'La réaction d\'estérification est :', opts: ['Totale et rapide', 'Limitée et lente', 'Irréversible', 'Exothermique'], ans: 1 },
  { mat: 'pc', q: 'La constante de temps τ d\'un circuit RL est :', opts: ['τ = RL', 'τ = R/L', 'τ = L/R', 'τ = √(L/R)'], ans: 2 },
  { mat: 'pc', q: 'La fréquence propre d\'un circuit LC est :', opts: ['ω₀ = LC', 'ω₀ = 1/(LC)', 'ω₀ = √(LC)', 'ω₀ = 1/√(LC)'], ans: 3 },
  { mat: 'pc', q: 'Le 1er principe de la thermodynamique est :', opts: ['ΔU = W + Q', 'L\'entropie croît', 'Q ne passe pas du froid au chaud', 'ΔG < 0'], ans: 0 },
  { mat: 'maths', q: 'La dérivée de eˣ est :', opts: ['x e^{x-1}', 'eˣ', 'x eˣ', '1/eˣ'], ans: 1 },
  { mat: 'maths', q: 'La dérivée de ln(x) est :', opts: ['1/x', 'x ln x', '1/x²', 'ln(x)/x'], ans: 0 },
  { mat: 'maths', q: 'Pour une suite géométrique, u_n = :', opts: ['u₀ + n·q', 'u₀·qⁿ', 'u₀·n·q', 'u₀ + qⁿ'], ans: 1 },
  { mat: 'maths', q: 'Pour X ~ B(n,p), E(X) = :', opts: ['np(1-p)', '√(np)', 'np', 'n/p'], ans: 2 },
  { mat: 'maths', q: 'lim(x→0) sin(x)/x = :', opts: ['0', '∞', '1', 'non définie'], ans: 2 },
  { mat: 'maths', q: '∫eˣ dx = :', opts: ['x eˣ + C', 'eˣ/x + C', 'eˣ + C', 'e^{x+1}/(x+1) + C'], ans: 2 },
  { mat: 'philo', q: 'Selon Descartes, la première certitude est :', opts: ['Je sens donc je suis', 'Cogito ergo sum', 'L\'existence précède l\'essence', 'La liberté est donnée'], ans: 1 },
  { mat: 'philo', q: 'Pour Freud, le refoulement est un mécanisme de :', opts: ['La conscience', 'Le Surmoi', 'Le Moi', 'Le Ça'], ans: 2 },
  { mat: 'philo', q: 'Le critère de falsifiabilité de Popper définit :', opts: ['Une vérité absolue', 'Une théorie scientifique', 'Une opinion', 'Une certitude morale'], ans: 1 },
  { mat: 'philo', q: 'Sartre affirme que l\'existence précède l\'essence, ce qui signifie :', opts: ['L\'homme est prédéterminé', 'L\'homme se définit par ses actes libres', 'L\'essence est innée', 'La liberté est impossible'], ans: 1 }
];

const FICHES_DATA = {
  svt: [
    { tag: 'Neurophysiologie', title: 'Potentiel d\'action', body: 'Phase de repos : −70 mV. Dépolarisation : Na⁺ entrant. Repolarisation : K⁺ sortant.', formula: null },
    { tag: 'Génétique', title: 'Mitose vs Méiose', body: 'Mitose : 2n → 2 × 2n identiques. Méiose : 2n → 4 × n différentes.', formula: '2n = 46 → n = 23' },
    { tag: 'Immunologie', title: 'Réponse humorale', body: 'Lymphocytes B → plasmocytes → anticorps. Neutralisation des antigènes.', formula: null },
    { tag: 'Digestion', title: 'Enzymes digestives', body: 'Amylase : amidon→maltose. Pepsine : protéines→peptides. Lipase : lipides→AG+glycérol.', formula: null },
    { tag: 'Reproduction', title: 'Gamétogenèse', body: 'Spermatogenèse continue. Ovogenèse bloquée en prophase I jusqu\'à l\'ovulation.', formula: null }
  ],
  pc: [
    { tag: 'Mécanique', title: 'Lois de Newton', body: '1ère : inertie. 2ème : ΣF = ma. 3ème : action/réaction.', formula: 'ΣF = m·a' },
    { tag: 'Électricité', title: 'Circuit RC', body: 'Charge : E(1−e^{−t/τ}). Décharge : U₀ e^{−t/τ}.', formula: 'τ = RC' },
    { tag: 'Chimie or.', title: 'Estérification', body: 'Acide + alcool ⇌ ester + eau. Catalysée par H⁺.', formula: 'R-COOH + R\'OH ⇌ R-COO-R\' + H₂O' },
    { tag: 'Cinétique', title: 'Arrhenius', body: 'k = A·e^{−Ea/RT}. Plus la température monte, plus la réaction est rapide.', formula: 'k = A·e^{−Ea/RT}' },
    { tag: 'Thermo.', title: '1er principe', body: 'ΔU = W + Q. Conservation de l\'énergie pour un système fermé.', formula: 'ΔU = W + Q' }
  ],
  maths: [
    { tag: 'Analyse', title: 'Dérivées usuelles', body: '(eˣ)\' = eˣ. (ln x)\' = 1/x. (xⁿ)\' = n xⁿ⁻¹.', formula: null },
    { tag: 'Suites', title: 'Suite arithmétique', body: 'u_n = u₀ + n·r. Somme : n(u₁+uₙ)/2.', formula: 'u_n = u₀ + n·r' },
    { tag: 'Suites', title: 'Suite géométrique', body: 'u_n = u₀·qⁿ. Somme : u₁(1−qⁿ)/(1−q).', formula: 'u_n = u₀·qⁿ' },
    { tag: 'Probas', title: 'Loi binomiale', body: 'X ~ B(n,p). P(X=k)=C(n,k) p^k(1−p)^{n-k}.', formula: 'E(X)=np  V(X)=np(1-p)' },
    { tag: 'Géométrie', title: 'Produit scalaire', body: 'u·v = x₁x₂ + y₁y₂ + z₁z₂. Orthogonal si u·v = 0.', formula: null }
  ],
  philo: [
    { tag: 'Liberté', title: 'Déterminisme vs liberté', body: 'Spinoza croit que l\'homme se croit libre parce qu\'il ignore les causes.', formula: null },
    { tag: 'Conscience', title: 'Freud et l\'inconscient', body: 'Ça / Moi / Surmoi. Refoulement, rêves et symptômes expriment l\'inconscient.', formula: null },
    { tag: 'Vérité', title: 'Théories de la vérité', body: 'Correspondance, cohérence et pragmatisme expliquent différents sens de la vérité.', formula: null },
    { tag: 'Morale', title: 'Kant et le devoir', body: 'Agir par devoir plutôt que par intérêt. La morale se mesure à l\'intention.', formula: null }
  ]
};

const pages = [
  { id: 'dashboard', label: 'Tableau de bord', icon: 'ti-layout-dashboard' },
  { id: 'cours', label: 'Cours complets', icon: 'ti-book' },
  { id: 'fiches', label: 'Fiches de révision', icon: 'ti-file-text' },
  { id: 'quiz', label: 'QCM & Exercices', icon: 'ti-bulb' },
  { id: 'planning', label: 'Planning', icon: 'ti-calendar' }
];

const subjects = [
  { id: 'svt', label: 'SVT', icon: 'ti-dna' },
  { id: 'pc', label: 'PC', icon: 'ti-atom' },
  { id: 'maths', label: 'Maths', icon: 'ti-math' },
  { id: 'philo', label: 'Philo', icon: 'ti-brain' }
];

const baselinePlan = [
  ['SVT', 'PC', 'Maths', 'SVT', 'PC', '', ''],
  ['PC', 'Maths', 'SVT', 'PC', 'Maths', '', ''],
  ['SVT', 'PC', 'Maths', 'SVT', 'PC', '', ''],
  ['PC', 'Maths', 'SVT', 'PC', 'Maths', '', ''],
  ['SVT', 'PC', 'Maths', 'SVT', 'PC', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '']
];

const state = {
  currentPage: 'dashboard',
  currentMat: 'svt',
  quizFilter: 'all',
  quizQueue: [...QUIZ_DATA],
  qIdx: 0,
  qScore: 0,
  qTotal: 0,
  qAnswered: false,
  reviewErrors: [],
  planning: JSON.parse(JSON.stringify(baselinePlan)),
  theme: 'light',
  searchQuery: ''
};

const elements = {
  sidebar: document.getElementById('sidebar'),
  mainNav: document.getElementById('main-nav'),
  subjectNav: document.getElementById('subject-nav'),
  pages: document.querySelectorAll('.page'),
  quickAccess: document.getElementById('quick-access'),
  progressScores: document.getElementById('progress-scores'),
  priorityList: document.getElementById('priority-list'),
  dChapters: document.getElementById('d-chapters'),
  dQuestions: document.getElementById('d-questions'),
  dScore: document.getElementById('d-score'),
  dQcm: document.getElementById('d-qcm'),
  coursSearch: document.getElementById('cours-search'),
  matGrid: document.getElementById('mat-grid'),
  chapList: document.getElementById('chap-list'),
  coursListView: document.getElementById('cours-list-view'),
  coursDetailView: document.getElementById('cours-detail-view'),
  coursDetailContent: document.getElementById('cours-detail-content'),
  backToCours: document.getElementById('back-to-cours'),
  ficheMat: document.getElementById('fiche-mat'),
  ficheSearch: document.getElementById('fiche-search'),
  fichesContainer: document.getElementById('fiches-container'),
  quizFilter: document.getElementById('quiz-filter'),
  quizBox: document.getElementById('quiz-box'),
  qsScore: document.getElementById('qs-score'),
  qsTotal: document.getElementById('qs-total'),
  qsPct: document.getElementById('qs-pct'),
  reviewList: document.getElementById('review-list'),
  quizReview: document.getElementById('quiz-review'),
  weekGrid: document.getElementById('week-grid'),
  themeToggle: document.getElementById('theme-toggle'),
  hamburger: document.querySelector('.hamburger'),
  resetPlanning: document.getElementById('reset-planning'),
  resetQuiz: document.getElementById('reset-quiz'),
  continueQuiz: document.getElementById('continue-quiz')
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) {
      Object.assign(state, saved);
      state.quizQueue = saved.quizQueue?.length ? saved.quizQueue : [...QUIZ_DATA];
      state.planning = saved.planning || JSON.parse(JSON.stringify(baselinePlan));
    }
  } catch (err) {
    console.warn('Impossible de charger l\'état', err);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    currentPage: state.currentPage,
    currentMat: state.currentMat,
    quizFilter: state.quizFilter,
    quizQueue: state.quizQueue,
    qIdx: state.qIdx,
    qScore: state.qScore,
    qTotal: state.qTotal,
    qAnswered: state.qAnswered,
    reviewErrors: state.reviewErrors,
    planning: state.planning,
    theme: state.theme,
    searchQuery: state.searchQuery
  }));
}

function setTheme(theme) {
  state.theme = theme;
  document.body.classList.toggle('dark', theme === 'dark');
  const icon = theme === 'dark' ? 'ti-sun' : 'ti-moon';
  elements.themeToggle.innerHTML = `<i class="ti ${icon}"></i>`;
  saveState();
}

function toggleTheme() {
  setTheme(state.theme === 'dark' ? 'light' : 'dark');
}

function createNavButtons() {
  elements.mainNav.innerHTML = '';
  pages.forEach(page => {
    const button = document.createElement('button');
    button.className = 'nav-btn';
    button.type = 'button';
    button.dataset.page = page.id;
    button.innerHTML = `<i class="ti ${page.icon}"></i> ${page.label}`;
    button.addEventListener('click', () => goTo(page.id));
    elements.mainNav.append(button);
  });

  elements.subjectNav.innerHTML = '';
  subjects.forEach(subject => {
    const button = document.createElement('button');
    button.className = 'nav-btn';
    button.type = 'button';
    button.dataset.mat = subject.id;
    button.innerHTML = `<i class="ti ${subject.icon}"></i> ${subject.label}`;
    button.addEventListener('click', () => {
      selectMat(subject.id);
      goTo('cours');
    });
    elements.subjectNav.append(button);
  });
}

function goTo(pageId) {
  state.currentPage = pageId;
  elements.pages.forEach(page => page.classList.toggle('active', page.id === `page-${pageId}`));
  document.querySelectorAll('.nav-btn').forEach(btn => {
    if (btn.dataset.page) {
      btn.classList.toggle('active', btn.dataset.page === pageId);
    }
  });
  if (window.innerWidth <= 700) {
    elements.sidebar.classList.remove('open');
  }
  if (pageId === 'cours') renderChapList();
  if (pageId === 'fiches') renderFiches();
  if (pageId === 'quiz') renderQuiz();
  if (pageId === 'planning') renderPlanning();
  saveState();
}

function toggleSidebar() {
  elements.sidebar.classList.toggle('open');
}

function selectMat(matId) {
  state.currentMat = matId;
  document.querySelectorAll('.mat-card').forEach(card => card.classList.toggle('active', card.dataset.mat === matId));
  renderChapList();
  saveState();
}

function getFilteredChapters() {
  const query = state.searchQuery.trim().toLowerCase();
  return COURS_DATA[state.currentMat].filter(chapter => {
    return !query || [chapter.title, chapter.sub].some(text => text.toLowerCase().includes(query));
  });
}

function renderChapList() {
  const filtered = getFilteredChapters();
  elements.chapList.innerHTML = filtered.map(chapter => {
    return `
      <li class="chap-item" data-id="${chapter.id}">
        <div class="chap-num">${chapter.num}</div>
        <div class="chap-body">
          <div class="chap-title">${chapter.title}</div>
          <div class="chap-sub">${chapter.sub}</div>
          <div class="prog-bar"><div class="prog-fill" style="width:${chapter.prog}%"></div></div>
        </div>
        <div class="chap-arrow"><i class="ti ti-chevron-right"></i></div>
      </li>`;
  }).join('');
  elements.chapList.querySelectorAll('.chap-item').forEach(item => {
    item.addEventListener('click', () => showCours(item.dataset.id));
  });
}

function renderMatGrid() {
  elements.matGrid.innerHTML = subjects.map(subject => {
    const activeClass = subject.id === state.currentMat ? 'active' : '';
    const chapterCount = COURS_DATA[subject.id]?.length || 0;
    return `
      <button type="button" class="mat-card ${activeClass}" data-mat="${subject.id}">
        <i class="ti ${subject.icon}"></i>
        <div class="mat-name">${subject.label}</div>
        <div class="mat-count">${chapterCount} chapitres</div>
      </button>`;
  }).join('');
  elements.matGrid.querySelectorAll('.mat-card').forEach(card => {
    card.addEventListener('click', () => selectMat(card.dataset.mat));
  });
}

function showCours(id) {
  const allChapters = Object.values(COURS_DATA).flat();
  const chapter = allChapters.find(item => item.id === id);
  if (!chapter) return;
  elements.coursListView.hidden = true;
  elements.coursDetailView.hidden = false;
  elements.coursDetailContent.innerHTML = `
    <div class="card">
      <h3 style="font-size:1.25rem;margin-bottom:0.4rem">${chapter.title}</h3>
      <p style="margin:0 0 1rem;color:var(--muted)">${chapter.sub}</p>
      ${chapter.sections.map(section => renderSection(section)).join('')}
    </div>`;
}

function renderSection(section) {
  if (section.type === 'intro') {
    return `<div class="section-block"><h4>${section.title}</h4><p>${section.text}</p></div>`;
  }
  if (section.type === 'section') {
    return `<div class="section-block"><h4>${section.title}</h4>${section.text ? `<p>${section.text}</p>` : ''}${section.items ? `<ul>${section.items.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}</div>`;
  }
  if (section.type === 'formula') {
    return `<div class="formula-box">${section.lines.map((line, index) => index === 0 ? `<strong>${line}</strong>` : `<span>${line}</span>`).join('<br>')}</div>`;
  }
  if (section.type === 'tip') {
    return `<div class="tip-box"><strong><i class="ti ti-bulb"></i> Astuce Bac</strong>${section.text}</div>`;
  }
  if (section.type === 'warning') {
    return `<div class="warning-box"><strong><i class="ti ti-alert-triangle"></i> Attention</strong>${section.text}</div>`;
  }
  return '';
}

function backToCours() {
  elements.coursListView.hidden = false;
  elements.coursDetailView.hidden = true;
}

function renderFiches() {
  const mat = elements.ficheMat.value;
  const query = elements.ficheSearch.value.trim().toLowerCase();
  state.currentMat = mat;
  state.searchQuery = query;
  const fiches = (FICHES_DATA[mat] || []).filter(item => {
    return !query || [item.tag, item.title, item.body].some(text => text.toLowerCase().includes(query));
  });
  elements.fichesContainer.innerHTML = fiches.length
    ? fiches.map(item => `
        <article class="fiche-card">
          <div class="fiche-header"><span class="badge badge-purple">${item.tag}</span></div>
          <h3 style="font-size:1rem;margin:0.4rem 0">${item.title}</h3>
          <p class="fiche-body-text">${item.body}</p>
          ${item.formula ? `<code class="fiche-formula">${item.formula}</code>` : ''}
        </article>`).join('')
    : '<p style="color:var(--muted);font-size:0.95rem;padding:1rem">Aucune fiche trouvée.</p>';
  saveState();
}

function updateQuizStats() {
  elements.qsScore.textContent = state.qScore;
  elements.qsTotal.textContent = state.qTotal;
  elements.qsPct.textContent = state.qTotal ? `${Math.round((state.qScore / state.qTotal) * 100)}%` : '—';
  elements.dScore.textContent = state.qTotal ? `${Math.round((state.qScore / state.qTotal) * 100)}%` : '0%';
  elements.dQcm.textContent = state.qTotal;
}

function buildQuizFilters() {
  const buttons = [
    { filter: 'all', label: 'Toutes' },
    ...subjects.map(subject => ({ filter: subject.id, label: subject.label }))
  ];
  elements.quizFilter.innerHTML = buttons.map(btn => {
    const active = btn.filter === state.quizFilter ? 'active' : '';
    return `<button type="button" class="filter-btn ${active}" data-filter="${btn.filter}">${btn.label}</button>`;
  }).join('');
  elements.quizFilter.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => setQuizFilter(button.dataset.filter));
  });
}

function setQuizFilter(filter) {
  state.quizFilter = filter;
  state.quizQueue = filter === 'all' ? [...QUIZ_DATA] : QUIZ_DATA.filter(item => item.mat === filter);
  state.qIdx = 0;
  state.qScore = 0;
  state.qTotal = 0;
  state.reviewErrors = [];
  buildQuizFilters();
  updateQuizStats();
  renderQuiz();
  saveState();
}

function renderQuiz() {
  buildQuizFilters();
  if (!state.quizQueue.length) {
    elements.quizBox.innerHTML = '<p style="color:var(--muted);font-size:0.95rem">Aucune question disponible pour ce filtre.</p>';
    return;
  }
  const question = state.quizQueue[state.qIdx % state.quizQueue.length];
  state.qAnswered = false;
  elements.quizBox.innerHTML = `
    <p style="font-size:0.9rem;color:var(--muted);margin-bottom:1rem">Question ${state.qIdx % state.quizQueue.length + 1} / ${state.quizQueue.length} · <span class="badge badge-purple">${question.mat.toUpperCase()}</span></p>
    <p class="quiz-q-text">${question.q}</p>
    ${question.opts.map((opt, index) => `
      <button type="button" class="quiz-opt" data-answer="${index}">
        <span class="opt-letter">${String.fromCharCode(65 + index)}</span>
        ${opt}
      </button>
    `).join('')}`;
  elements.quizBox.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => answerQ(Number(btn.dataset.answer)));
  });
  renderQuizReview();
}

function answerQ(answerIndex) {
  if (state.qAnswered) return;
  const question = state.quizQueue[state.qIdx % state.quizQueue.length];
  state.qAnswered = true;
  state.qTotal += 1;
  const options = elements.quizBox.querySelectorAll('.quiz-opt');
  options.forEach((button, index) => {
    button.classList.add('locked');
    if (index === question.ans) button.classList.add('correct');
    if (index === answerIndex && answerIndex !== question.ans) button.classList.add('wrong');
  });
  if (answerIndex === question.ans) {
    state.qScore += 1;
  } else {
    state.reviewErrors.push(`${question.mat.toUpperCase()} — ${question.q}`);
  }
  updateQuizStats();
  renderQuizReview();
  state.qIdx += 1;
  setTimeout(renderQuiz, 1400);
  saveState();
}

function renderQuizReview() {
  if (state.reviewErrors.length === 0) {
    elements.quizReview.hidden = true;
    return;
  }
  elements.quizReview.hidden = false;
  elements.reviewList.innerHTML = state.reviewErrors.map(item => `<li>${item}</li>`).join('');
}

function resetQuiz() {
  state.quizQueue = state.quizFilter === 'all' ? [...QUIZ_DATA] : QUIZ_DATA.filter(item => item.mat === state.quizFilter);
  state.qIdx = 0;
  state.qScore = 0;
  state.qTotal = 0;
  state.qAnswered = false;
  state.reviewErrors = [];
  updateQuizStats();
  renderQuiz();
  saveState();
}

function renderPlanning() {
  const dayNames = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  elements.weekGrid.innerHTML = state.planning.map((daySlots, dayIndex) => {
    return `<div class="day-col">
      <div class="day-name">${dayNames[dayIndex]}</div>
      ${daySlots.map((slot, slotIndex) => {
        const isFilled = slot !== '';
        const bgColor = isFilled ? getSubjectColor(slot) : 'var(--card)';
        const color = isFilled ? getSubjectText(slot) : 'var(--muted)';
        return `<button type="button" class="slot" style="background:${bgColor};color:${color};border-style:${isFilled ? 'solid' : 'dashed'}" data-day="${dayIndex}" data-slot="${slotIndex}">${slot || '+'}</button>`;
      }).join('')}
    </div>`;
  }).join('');
  elements.weekGrid.querySelectorAll('.slot').forEach(button => {
    button.addEventListener('click', () => cycleSlot(Number(button.dataset.day), Number(button.dataset.slot)));
  });
  saveState();
}

function getSubjectColor(label) {
  return {
    SVT: '#EEEDFE',
    PC: '#E1F5EE',
    Maths: '#FAEEDA',
    Philo: '#FBEAF0'
  }[label] || 'var(--card)';
}

function getSubjectText(label) {
  return {
    SVT: '#3C3489',
    PC: '#0F6E56',
    Maths: '#854F0B',
    Philo: '#993556'
  }[label] || 'var(--muted)';
}

function cycleSlot(dayIndex, slotIndex) {
  const choices = ['SVT', 'PC', 'Maths', 'Philo', ''];
  const current = state.planning[dayIndex][slotIndex];
  const next = choices[(choices.indexOf(current) + 1) % choices.length];
  state.planning[dayIndex][slotIndex] = next;
  renderPlanning();
}

function renderDashboard() {
  const chaptersCount = Object.values(COURS_DATA).reduce((sum, list) => sum + list.length, 0);
  const questionsCount = QUIZ_DATA.length;
  elements.dChapters.textContent = chaptersCount;
  elements.dQuestions.textContent = questionsCount;

  const progressBySubject = subjects.map(subject => {
    const chapters = COURS_DATA[subject.id] || [];
    const avg = chapters.length ? Math.round(chapters.reduce((acc, item) => acc + item.prog, 0) / chapters.length) : 0;
    return { label: subject.label, value: avg };
  });

  elements.progressScores.innerHTML = progressBySubject.map(item => `
    <div class="progress-row">
      <span>${item.label}</span>
      <div class="bar"><div class="fill" style="width:${item.value}%"></div></div>
      <span class="pct">${item.value}%</span>
    </div>`).join('');

  const priority = [
    'Cinétique chimique',
    'Probabilités',
    'Thermodynamique',
    'La reproduction',
    'Géométrie dans l\'espace'
  ];
  elements.priorityList.innerHTML = priority.map(item => `
    <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.95rem"><span>${item}</span><span class="badge badge-amber">Important</span></div>`).join('');

  elements.quickAccess.innerHTML = subjects.map(subject => {
    const chapterCount = COURS_DATA[subject.id]?.length || 0;
    return `<button type="button" class="mat-card" data-mat="${subject.id}">
      <i class="ti ${subject.icon}"></i>
      <div class="mat-name">${subject.label}</div>
      <div class="mat-count">${chapterCount} chapitres</div>
    </button>`;
  }).join('');
  elements.quickAccess.querySelectorAll('.mat-card').forEach(card => {
    card.addEventListener('click', () => {
      selectMat(card.dataset.mat);
      goTo('cours');
    });
  });
}

function bindEvents() {
  elements.hamburger.addEventListener('click', toggleSidebar);
  elements.themeToggle.addEventListener('click', toggleTheme);
  elements.resetPlanning.addEventListener('click', () => {
    state.planning = JSON.parse(JSON.stringify(baselinePlan));
    renderPlanning();
  });
  elements.resetQuiz.addEventListener('click', resetQuiz);
  elements.continueQuiz.addEventListener('click', () => goTo('quiz'));
  elements.backToCours.addEventListener('click', backToCours);

  elements.coursSearch.addEventListener('input', event => {
    state.searchQuery = event.target.value;
    renderChapList();
  });
  elements.ficheMat.addEventListener('change', renderFiches);
  elements.ficheSearch.addEventListener('input', renderFiches);
}

function init() {
  loadState();
  createNavButtons();
  renderMatGrid();
  renderDashboard();
  renderChapList();
  renderFiches();
  renderPlanning();
  renderQuiz();
  setTheme(state.theme);
  goTo(state.currentPage);
  bindEvents();
}

init();
