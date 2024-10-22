const events = [
    {
      "title": "Bataille de Gergovie",
      "date": "52 av. J.-C.",
      "coordinates": [45.721649, 3.111935],
      "description": "La bataille de Gergovie fut une victoire décisive de Vercingétorix sur Jules César pendant la guerre des Gaules. La victoire a renforcé la révolte gauloise contre l'Empire romain. Gergovie est devenue un symbole de la résistance gauloise, et cette victoire a permis à Vercingétorix de rallier davantage de tribus gauloises à sa cause. Malgré cette victoire, la guerre des Gaules se termina par la défaite des Gaulois quelques mois plus tard à Alésia."
    },
    {
      "title": "Concile de Clermont",
      "date": "1095",
      "coordinates": [45.779645, 3.080222],
      "description": "Le concile de Clermont est un événement clé de l'histoire chrétienne où le pape Urbain II a lancé la première croisade. En appelant à libérer Jérusalem des musulmans, Urbain II a galvanisé les forces chrétiennes européennes, déclenchant plusieurs siècles de croisades. Cet appel a marqué un tournant dans les relations entre chrétiens et musulmans au Moyen Âge. La première croisade a réussi à prendre Jérusalem en 1099."
    },
    {
      "title": "Invention du cinéma par les frères Lumière",
      "date": "1895",
      "coordinates": [45.761333, 4.831379],
      "description": "Les frères Auguste et Louis Lumière ont réalisé les premières projections publiques de films à Lyon en 1895, marquant la naissance du cinéma. Leur invention, le cinématographe, a révolutionné le divertissement en créant l'industrie cinématographique moderne. Leurs films, bien que courts, ont ouvert la voie à un art et une industrie mondiaux. Aujourd'hui, Lyon est considérée comme l'un des berceaux du cinéma."
    },
    {
      "title": "Révolte des Canuts",
      "date": "1831",
      "coordinates": [45.768699, 4.834277],
      "description": "La révolte des Canuts, ouvriers de la soie à Lyon, est l'une des premières grandes révoltes ouvrières de l'ère industrielle en France. Les Canuts se sont insurgés contre les mauvaises conditions de travail et les bas salaires, revendiquant 'Vivre en travaillant ou mourir en combattant'. Cette révolte a mis en lumière les difficultés des travailleurs de l'industrie textile et a inspiré de futurs mouvements sociaux. La répression brutale de la révolte a cependant retardé les réformes sociales."
    },
    {
      "title": "Procès de Vichy",
      "date": "1945",
      "coordinates": [46.130409, 3.419017],
      "description": "Le procès de Vichy après la Seconde Guerre mondiale visait les collaborateurs du régime de Vichy, qui avait collaboré avec l'Allemagne nazie. Ce procès a été un moment charnière pour la France dans son processus de réconciliation et de réflexion sur les crimes de guerre et la collaboration. Il a contribué à établir la responsabilité individuelle dans les crimes de guerre, tout en créant un débat sur la mémoire collective de cette période sombre. Plusieurs anciens fonctionnaires ont été jugés et condamnés."
    },
    {
      "title": "Construction de la basilique Notre-Dame de Fourvière",
      "date": "1872-1884",
      "coordinates": [45.762541, 4.818374],
      "description": "Érigée sur la colline de Fourvière à Lyon, la basilique Notre-Dame de Fourvière est un emblème architectural majeur de la ville. Construite après la guerre franco-prussienne, elle est un symbole de dévotion religieuse et de résistance nationale. Avec son style néo-byzantin, elle surplombe Lyon et attire des milliers de visiteurs chaque année. Elle symbolise également la montée en puissance de l'Église catholique en France à cette époque.",
      "image": "https://www.visitelyon.fr/wp-content/uploads/2020/10/basilique-notre-dame-de-fourviere-4.jpeg"
    },
    {
      "title": "Éruption du Puy de Dôme",
      "date": "5760 av. J.-C.",
      "coordinates": [45.772318, 2.964744],
      "description": "Le Puy de Dôme est un volcan endormi situé dans la chaîne des Puys, en Auvergne. Son éruption a profondément façonné le paysage environnant, formant des coulées de lave qui sont aujourd'hui visibles. Bien que le volcan soit désormais inactif, il reste une attraction naturelle majeure, inscrite au patrimoine mondial de l'UNESCO. L'éruption a eu un impact géologique significatif sur la région."
    },
    {
      "title": "Première ascension du Mont Blanc",
      "date": "8 août 1786",
      "coordinates": [45.8326, 6.8651],
      "description": "La première ascension du Mont Blanc par Jacques Balmat et Michel-Gabriel Paccard marque une étape importante dans l'histoire de l'alpinisme. Cette réussite a inspiré une vague d'exploration des montagnes européennes. L'ascension du Mont Blanc, point culminant des Alpes, a également marqué le début du tourisme alpin et a contribué à la renommée internationale de la région de Chamonix. Aujourd'hui, le Mont Blanc est un symbole des défis de l'alpinisme et de la beauté naturelle des Alpes."
    },
    {
      "title": "La fête des Lumières",
      "date": "1643",
      "coordinates": [45.764043, 4.835659],
      "description": "La fête des Lumières, célébrée à Lyon chaque année au début décembre, trouve ses origines dans le XVIIe siècle lorsque les Lyonnais ont fait le vœu de rendre hommage à la Vierge Marie pour la protection contre la peste. Depuis lors, elle est devenue un événement culturel et artistique majeur, attirant des millions de visiteurs pour ses spectacles lumineux. Cet événement témoigne de la richesse du patrimoine religieux et culturel de la ville."
    },
    {
      "title": "Siège de Lyon",
      "date": "1793",
      "coordinates": [45.748507, 4.842224],
      "description": "Pendant la Révolution française, Lyon s'est rebellée contre la Convention nationale. Le siège de Lyon par les forces révolutionnaires a duré plusieurs mois, et la ville fut gravement endommagée par les bombardements. Cette répression a marqué la fin de l'opposition royaliste et girondine dans la ville, et a renforcé le pouvoir central de la République. Le siège de Lyon est l'un des événements majeurs de la Terreur."
    },
    {
      "title": "Accord d'Évian",
      "date": "18 mars 1962",
      "coordinates": [46.4001, 6.5875],
      "description": "Les accords d'Évian, signés à Évian-les-Bains, ont mis fin à la guerre d'Algérie et ont conduit à l'indépendance de l'Algérie. Cet accord a marqué un tournant majeur dans la décolonisation française et a mis fin à huit années de conflit sanglant. Il a également inauguré une nouvelle ère de relations franco-algériennes, bien que celles-ci soient encore marquées par les cicatrices du passé. Les accords ont été largement salués pour avoir évité une guerre civile prolongée.",
      "image": "https://www.radiofrance.fr/s3/cruiser-production-eu3/2021/11/0e95fc3c-0d57-48f7-a1a8-e13270800d15/640x340_sc_evian-mars-1962-getty.jpg"
    },
    {
      "title": "Création du Parc National de la Vanoise",
      "date": "1963",
      "coordinates": [45.342083, 6.801444],
      "description": "Le Parc National de la Vanoise, créé en 1963, est le premier parc national en France. Situé dans les Alpes, il vise à protéger la faune et la flore locales, tout en offrant un cadre préservé pour la randonnée et l'alpinisme. Il est devenu un modèle pour la protection de l'environnement dans les régions montagneuses françaises. Aujourd'hui, le parc est un refuge pour de nombreuses espèces, notamment le bouquetin des Alpes."
    },
    {
      "title": "Sacre de Saint Bernard de Clairvaux à la Chartreuse de Portes",
      "date": "1115",
      "coordinates": [45.955102, 5.436388],
      "description": "Saint Bernard de Clairvaux, figure influente de la chrétienté médiévale, fut sacré à la Chartreuse de Portes en 1115. Il devint l'un des principaux promoteurs de la réforme cistercienne, influençant profondément l'Église catholique au Moyen Âge. Son action a marqué le renouveau de la spiritualité chrétienne et la construction de nombreuses abbayes cisterciennes. Ce sacre a renforcé l'importance de la région dans l'histoire religieuse européenne."
    },
    {
      "title": "Massacre de Romans-sur-Isère",
      "date": "1580",
      "coordinates": [45.046148, 5.053722],
      "description": "Pendant les guerres de religion, Romans-sur-Isère a été le théâtre d'un massacre en 1580, lorsque des tensions entre catholiques et protestants ont dégénéré en violence. Le massacre a été un symbole des conflits religieux qui ont ravagé la France au XVIe siècle. Cet événement illustre l'intensité des affrontements qui ont marqué les guerres de religion, et les divisions profondes au sein de la société française de l'époque."
    },
    {
      "title": "Traversée des Alpes par Hannibal",
      "date": "218 av. J.-C.",
      "coordinates": [45.8348, 6.8952],
      "description": "Hannibal Barca, général carthaginois, a mené son armée, incluant des éléphants, à travers les Alpes en 218 av. J.-C. lors de la Seconde Guerre punique. Cet exploit militaire audacieux a surpris les Romains et a établi Hannibal comme l'un des grands stratèges de l'histoire. Sa traversée a non seulement permis de prendre Rome par surprise, mais a aussi influencé la géopolitique de la région. Cet épisode est devenu une légende de l'histoire militaire."
    },
    {
      "title": "Épisode du plateau de Glières",
      "date": "1944",
      "coordinates": [45.9445, 6.4473],
      "description": "En 1944, le plateau des Glières est devenu un lieu emblématique de la résistance française contre l'occupation nazie. Les maquisards, regroupés sur ce plateau, ont mené des actions de sabotage contre les forces allemandes. La bataille de Glières a été l'une des premières grandes offensives menées par les résistants, symbolisant leur courage et leur détermination. Cet épisode a renforcé la lutte pour la libération de la France et est aujourd'hui commémoré comme un symbole de la résistance.",
      "image": "https://de.lac-annecy.com/content/uploads/2021/03/730x420Le_Plateau_des_Glieres-Gilles_Piel-10154-1920px.jpg"
    }
]
  