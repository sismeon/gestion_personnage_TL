function TL_Schema($scope) {
  $scope.schema_user = {
    type: "object",
    title: "Joueur",
    properties: {
      nickname: {
        title: "Surnom du joueur",
        type: "string",
        minLength: 2
      },
      id: {
        type: "string"
      },
      name: {
        title: "Prénom et Nom du joueur",
        type: "string",
        minLength: 2
      },
      email: {
        title: "Courriel",
        type: "string",
        pattern: "^\\S+@\\S+$"
      },
      comment: {
        title: "Commentaire",
        type: "string"
      },
      comment_admin: {
        title: "ADMIN commentaire",
        type: "string"
      }
    },
    required: ["name"]
  };

  $scope.schema_char = {
    type: "object",
    title: "Joueur",
    properties: {
      name: {
        title: "Nom du personnage",
        type: "string"
      },
      id: {
        type: "string"
      },
      xp_naissance: {
        type: "integer",
      },
      xp_gn_1_2016: {
        type: "boolean",
      },
      xp_gn_2_2016: {
        type: "boolean",
      },
      xp_gn_3_2016: {
        type: "boolean",
      },
      xp_autre: {
        type: "integer",
      },
      faction: {
        title: "Faction",
        type: "string"
      },
      sous_faction: {
        title: "Sous-faction",
        type: "string"
      },
      endurance: {
        title: "Endurance",
        type: "array",
        items: {type: "string"}
      },
      energie: {
        title: "Énergie",
        type: "array",
        items: {type: "string"}
      },
      habilites: {
        type: "array",
        items: {
          type: "object",
          properties: {

            discipline: {
              title: "Discipline",
              type: "string"
            },

            habilite: {
              title: "Habilité",
              type: "string"
            },

            options: {
              title: "Option",
              type: "array",
              items: {type: "string"}
            }
          }
        }
      },
      rituel_ecole: {
        title: "Rituel/École",
        type: "array",
        items: {type: "string"}
      },
      rituel: {
        type: "array",
        title: "Rituel",
        maxItems: 100,
        minItems: 0,
        uniqueItems: true,
        items: {
          title: "Rituel",
          type: "string"
        }
      },
      technique_maitre: {
        type: "array",
        title: "Techniques de Maitre",
        maxItems: 10,
        minItems: 0,
        uniqueItems: true,
        items: {
          title: "Technique de Maitre",
          type: "string"
        }
      }
    }
//    },
//    required: ["faction", "xp_naissance", "xp_autre"]
  };

  if ($scope.is_admin) {
      $scope.form_user = [
      {
        key: "name",
        placeholder: "Votre nom entier (prénom et nom)"
      },
      {
        key: "nickname",
        placeholder: "Votre surnom - facultatif"
      },
      {
        key: "email",
        placeholder: "Votre courriel"
      },
      {
        key: "comment",
        type: "textarea",
        placeholder: ""
      },
      {
        key: "comment_admin",
        type: "textarea",
        placeholder: ""
      }
    ];
    $scope.form_char = [
      {
        key: "name",
        placeholder: "Votre nom de joueur"
      },
      {
        key: "xp_naissance",
        placeholder: "Défaut 6 xp pour nouveau joueur."
      },
      {
        key: "xp_gn_1_2016",
        placeholder: "Êtes-vous venu au jeu du 27 mai 2016?"
      },
      {
        key: "xp_gn_2_2016",
        placeholder: "Êtes-vous venu au jeu du 29 juillet 2016?"
      },
      {
        key: "xp_gn_3_2016",
        placeholder: "Êtes-vous venu au jeu du 26 août 2016?"
      },
      {
        key: "xp_autre",
        placeholder: "Peut-être des points de mérites ou autre."
      },
      {
        key: "faction",
        type: "select",
        titleMap: [
          {value: "Vanican", name: "Vanican"},
          {value: "Canavim", name: "Canavim"},
          {value: "Vallam", name: "Vallam"},
          {value: "Sarsare", name: "Sarsare"}
        ]
      },
      {
        key: "sous_faction",
        type: "select",
        titleMap: [
          {value: "empty", name: "- Aucune sous-faction -"},
          {value: "Sanglier", name: "Sanglier"},
          {value: "Faucheur", name: "Faucheur"},
          {value: "Balmont", name: "Balmont"},
          {value: "Druide", name: "Druide"},
          {value: "Smith", name: "Smith"}
        ]
      },
      {
        key: "endurance",
        type: "strapselect",
        placeholder: "",
        options: {
          multiple: "true"
        },
        titleMap: [
          {value: "Endurance_1", name: "+1"},
          {value: "Endurance_2", name: "+1"},
          {value: "Endurance_3", name: "+1"}
        ]
      },
      {
        key: "energie",
        type: "strapselect",
        placeholder: "",
        options: {
          multiple: "true"
        },
        titleMap: [
          {value: "Energie_1", name: "+2"},
          {value: "Energie_2", name: "+2"},
          {value: "Energie_3", name: "+2"}
        ]
      },
      {
        key: "habilites",
        add: "Ajouter Discipline",
        style: {
          add: "btn-success"
        },
        items: [
          {
            key: "habilites[].discipline",
            type: "strapselect",
            placeholder: "",
            options: {
              inlineMaxLength: 5
            },
            titleMap: [
              {value: "Combattante", name: "Combattante"},
              {value: "Sournoise", name: "Sournoise"},
              {value: "Magique", name: "Magique"},
              {value: "Professionnelle", name: "Professionnelle"}
            ]
          },
          {
            key: "habilites[].habilite",
            type: "strapselect",
            options: {
              filterTriggers: ["model.habilites[arrayIndex].discipline"],
              filter: "model.habilites[arrayIndex].discipline==item.category",
              inlineMaxLength: 5,
              maxLength: 3
            },
            placeholder: "",
            titleMap: [
              {value: "Discipline", name: "Discipline", category: "Combattante"},
              {value: "Karma", name: "Karma", category: "Combattante"},
              {value: "Offense", name: "Offense", category: "Combattante"},
              {value: "Défense", name: "Défense", category: "Combattante"},

              {value: "Alchimie", name: "Alchimie", category: "Sournoise"},
              {value: "Embuscade", name: "Embuscade", category: "Sournoise"},
              {value: "Fourberie", name: "Fourberie", category: "Sournoise"},
              {value: "Travail de précision", name: "Travail de précision", category: "Sournoise"},

              {value: "Artisanat Arcane", name: "Artisanat Arcane", category: "Magique"},
              {value: "Rituel", name: "Rituel", category: "Magique"},
              {value: "Sorcellerie", name: "Sorcellerie", category: "Magique"},
              {value: "Thaumaturgie", name: "Thaumaturgie", category: "Magique"},

              {value: "Baratin", name: "Baratin", category: "Professionnelle"},
              {value: "Marchandage", name: "Marchandage", category: "Professionnelle"},
              {value: "Médecine", name: "Médecine", category: "Professionnelle"},
              {value: "Métier", name: "Métier", category: "Professionnelle"}
            ]
          },
          {
            key: "habilites[].options",
            type: "strapselect",
            // onChange: function (modelValue, form) {
            //   if (modelValue.length > 3) {
            //     // var set1 = new Set(modelValue);
            //     // var set2 = new Set(this.last_value);
            //     // var difference = new Set([...set1].filter(x => !set2.has(x)));
            //     // console.log(difference);
            //     // var difference = [];
            //     // jQuery.grep(this.last_value, function (el) {
            //     //   if (jQuery.inArray(el, modelValue) == -1) difference.push(el);
            //     // });
            //     // console.log(difference);
            //     $scope.model.habilites[arrayIndex].option = this.last_value;
            //   } else {
            //     this.last_value = modelValue;
            //   }
            // },
            options: {
              multiple: "true",
              filterTriggers: ["model.habilites[arrayIndex].habilite"],
              filter: "model.habilites[arrayIndex].habilite==item.category",
              inlineMaxLength: 5
            },
            placeholder: "",
            titleMap: [
              {value: "Résilience", name: "Résilience", category: "Discipline"},
              {value: "Endurcie", name: "Endurcie", category: "Discipline"},
              {value: "Loyauté", name: "Loyauté", category: "Discipline"},
              {value: "Doctrine", name: "Doctrine", category: "Discipline"},
              {value: "Vigilance", name: "Vigilance", category: "Discipline"},

              {value: "Karma_1", name: "+2", category: "Karma"},
              {value: "Karma_2", name: "+2", category: "Karma"},
              {value: "Karma_3", name: "+2", category: "Karma"},
              {value: "Karma_4", name: "+2", category: "Karma"},
              {value: "Karma_5", name: "+2", category: "Karma"},

              {value: "Assaut", name: "Assaut", category: "Offense"},
              {value: "Jambette", name: "Jambette", category: "Offense"},
              {value: "Désarmement", name: "Désarmement", category: "Offense"},
              {value: "Coupe-souffle", name: "Coupe-souffle", category: "Offense"},
              {value: "Charge", name: "Charge", category: "Offense"},

              {value: "Esquive", name: "Esquive", category: "Défense"},
              {value: "Déflexion", name: "Déflexion", category: "Défense"},
              {value: "Déviation", name: "Déviation", category: "Défense"},
              {value: "Santé", name: "Santé", category: "Défense"},
              {value: "Second Souffle", name: "Second Souffle", category: "Défense"},

              {value: "Alchimie_1", name: "4", category: "Alchimie"},
              {value: "Alchimie_2", name: "+2", category: "Alchimie"},
              {value: "Alchimie_3", name: "+2", category: "Alchimie"},
              {value: "Alchimie_4", name: "+2", category: "Alchimie"},
              {value: "Alchimie_5", name: "+2", category: "Alchimie"},

              {value: "Camouflage", name: "Camouflage", category: "Embuscade"},
              {value: "Dissimulation", name: "Dissimulation", category: "Embuscade"},
              {value: "Capture", name: "Capture", category: "Embuscade"},
              {value: "Piège", name: "Piège", category: "Embuscade"},
              {value: "Aveuglement", name: "Aveuglement", category: "Embuscade"},

              {value: "Attaque sournoise", name: "Attaque sournoise", category: "Fourberie"},
              {value: "Coup bas", name: "Coup bas", category: "Fourberie"},
              {value: "Coup sonnant", name: "Coup sonnant", category: "Fourberie"},
              {value: "Coupe-jarret", name: "Coupe-jarret", category: "Fourberie"},
              {value: "Stylet", name: "Stylet", category: "Fourberie"},

              {value: "Serrurier", name: "Serrurier", category: "Travail de précision"},
              {value: "Évasion", name: "Évasion", category: "Travail de précision"},
              {value: "Désamorçage", name: "Désamorçage", category: "Travail de précision"},
              {value: "Torture", name: "Torture", category: "Travail de précision"},
              {value: "Vol à la tire", name: "Vol à la tire", category: "Travail de précision"},

              {value: "Mixture de potions", name: "Mixture de potions", category: "Artisanat Arcane"},
              {value: "Enchantement", name: "Enchantement", category: "Artisanat Arcane"},
              {value: "Infusion", name: "Infusion", category: "Artisanat Arcane"},
              {value: "Réparation", name: "Réparation", category: "Artisanat Arcane"},
              {value: "Disjonction", name: "Disjonction", category: "Artisanat Arcane"},

              {value: "Rituel_1", name: "6", category: "Rituel"},
              {value: "Rituel_2", name: "+3", category: "Rituel"},
              {value: "Rituel_3", name: "+3", category: "Rituel"},
              {value: "Rituel_4", name: "+3", category: "Rituel"},
              {value: "Rituel_5", name: "+3", category: "Rituel"},

              {value: "Frénésie", name: "Frénésie", category: "Sorcellerie"},
              {value: "Terreur", name: "Terreur", category: "Sorcellerie"},
              {value: "Noirceur", name: "Noirceur", category: "Sorcellerie"},
              {value: "Silence", name: "Silence", category: "Sorcellerie"},
              {value: "Éclair", name: "Éclair", category: "Sorcellerie"},

              {value: "Guérison", name: "Guérison", category: "Thaumaturgie"},
              {value: "Réanimation", name: "Réanimation", category: "Thaumaturgie"},
              {value: "Réssurection", name: "Réssurection", category: "Thaumaturgie"},
              {value: "Liberté", name: "Liberté", category: "Thaumaturgie"},
              {value: "Voix", name: "Voix", category: "Thaumaturgie"},

              {value: "Diplomatie", name: "Diplomatie", category: "Baratin"},
              {value: "Mensonge", name: "Mensonge", category: "Baratin"},
              {value: "Revenu", name: "Revenu", category: "Baratin"},
              {value: "Verbomoteur", name: "Verbomoteur", category: "Baratin"},
              {value: "Discours", name: "Discours", category: "Baratin"},

              {value: "Marchandage_1", name: "4", category: "Marchandage"},
              {value: "Marchandage_2", name: "+2", category: "Marchandage"},
              {value: "Marchandage_3", name: "+2", category: "Marchandage"},
              {value: "Marchandage_4", name: "+2", category: "Marchandage"},
              {value: "Marchandage_5", name: "+2", category: "Marchandage"},

              {value: "Opération", name: "Opération", category: "Médecine"},
              {value: "Suture", name: "Suture", category: "Médecine"},
              {value: "Psychiatrie", name: "Psychiatrie", category: "Médecine"},
              {value: "Relaxation", name: "Relaxation", category: "Médecine"},
              {value: "Pharmacie", name: "Pharmacie", category: "Médecine"},

              {value: "Artisinat", name: "Artisinat", category: "Métier"},
              {value: "Forge", name: "Forge", category: "Métier"},
              {value: "Herboristerie", name: "Herboristerie", category: "Métier"},
              {value: "Spécialiste I - Herboristerie", name: "Spécialiste I - Herboristerie", category: "Métier"},
              {value: "Spécialiste I - Artisanat", name: "Spécialiste I - Artisanat", category: "Métier"},
              {value: "Spécialiste I - Enchantement", name: "Spécialiste I - Enchantement", category: "Métier"},
              {value: "Spécialiste I - Forge", name: "Spécialiste I - Forge", category: "Métier"},
              {
                value: "Spécialiste I - Mixture de Potion",
                name: "Spécialiste I - Mixture de Potion",
                category: "Métier"
              },
              {value: "Spécialiste II - Herboristerie", name: "Spécialiste II - Herboristerie", category: "Métier"},
              {value: "Spécialiste II - Artisanat", name: "Spécialiste II - Artisanat", category: "Métier"},
              {value: "Spécialiste II - Enchantement", name: "Spécialiste II - Enchantement", category: "Métier"},
              {value: "Spécialiste II - Forge", name: "Spécialiste II - Forge", category: "Métier"},
              {
                value: "Spécialiste II - Mixture de Potion",
                name: "Spécialiste II - Mixture de Potion",
                category: "Métier"
              }
            ]
          }
        ]
      },
      {
        key: "rituel_ecole",
        type: "strapselect",
        placeholder: "",
        options: {
          multiple: "true"
        },
        titleMap: [
          {value: "Démonologie", name: "Démonologie"},
          {value: "Nécromancie", name: "Nécromancie"},
          {value: "Nature", name: "Nature"},
          {value: "Protection", name: "Protection"},
          {value: "Élémentaire", name: "Élémentaire"}
        ]
      },
      {
        key: "rituel",
        add: "Ajout d'un rituel",
        style: {
          add: "btn-success"
        },
      },
      {
        key: "technique_maitre",
        add: "Ajouter Technique de maitre",
        style: {
          add: "btn-success"
        },
      },
      {
        type: "submit",
        style: "btn-info",
        title: "Enregistrer"
      }
    ];
  } else {
    $scope.form_user = [
      {
        key: "name",
        placeholder: "Votre nom entier (prénom et nom)"
      },
      {
        key: "nickname",
        placeholder: "Votre surnom - facultatif"
      },
      {
        key: "email",
        placeholder: "Votre courriel"
      },
      {
        key: "comment",
        type: "textarea",
        placeholder: "Je ne sais pas quoi écrire."
      }
    ];

    $scope.form_char = [
      {
        key: "name",
        placeholder: "Votre nom de joueur"
      },
      {
        key: "faction",
        type: "select",
        titleMap: [
          {value: "Vanican", name: "Vanican"},
          {value: "Canavim", name: "Canavim"},
          {value: "Vallam", name: "Vallam"},
          {value: "Sarsare", name: "Sarsare"}
        ]
      },
      {
        key: "sous_faction",
        type: "select",
        titleMap: [
          {value: "empty", name: "- Aucune sous-faction -"},
          {value: "Sanglier", name: "Sanglier"},
          {value: "Faucheur", name: "Faucheur"},
          {value: "Balmont", name: "Balmont"},
          {value: "Druide", name: "Druide"},
          {value: "Smith", name: "Smith"}
        ]
      },
      {
        key: "endurance",
        type: "strapselect",
        placeholder: "",
        options: {
          multiple: "true"
        },
        titleMap: [
          {value: "Endurance_1", name: "+1"},
          {value: "Endurance_2", name: "+1"},
          {value: "Endurance_3", name: "+1"}
        ]
      },
      {
        key: "energie",
        type: "strapselect",
        placeholder: "",
        options: {
          multiple: "true"
        },
        titleMap: [
          {value: "Energie_1", name: "+2"},
          {value: "Energie_2", name: "+2"},
          {value: "Energie_3", name: "+2"}
        ]
      },
      {
        key: "habilites",
        add: "Ajouter Discipline",
        style: {
          add: "btn-success"
        },
        items: [
          {
            key: "habilites[].discipline",
            type: "strapselect",
            placeholder: "",
            options: {
              inlineMaxLength: 5
            },
            titleMap: [
              {value: "Combattante", name: "Combattante"},
              {value: "Sournoise", name: "Sournoise"},
              {value: "Magique", name: "Magique"},
              {value: "Professionnelle", name: "Professionnelle"}
            ]
          },
          {
            key: "habilites[].habilite",
            type: "strapselect",
            options: {
              filterTriggers: ["model.habilites[arrayIndex].discipline"],
              filter: "model.habilites[arrayIndex].discipline==item.category",
              inlineMaxLength: 5,
              maxLength: 3
            },
            placeholder: "",
            titleMap: [
              {value: "Discipline", name: "Discipline", category: "Combattante"},
              {value: "Karma", name: "Karma", category: "Combattante"},
              {value: "Offense", name: "Offense", category: "Combattante"},
              {value: "Défense", name: "Défense", category: "Combattante"},

              {value: "Alchimie", name: "Alchimie", category: "Sournoise"},
              {value: "Embuscade", name: "Embuscade", category: "Sournoise"},
              {value: "Fourberie", name: "Fourberie", category: "Sournoise"},
              {value: "Travail de précision", name: "Travail de précision", category: "Sournoise"},

              {value: "Artisanat Arcane", name: "Artisanat Arcane", category: "Magique"},
              {value: "Rituel", name: "Rituel", category: "Magique"},
              {value: "Sorcellerie", name: "Sorcellerie", category: "Magique"},
              {value: "Thaumaturgie", name: "Thaumaturgie", category: "Magique"},

              {value: "Baratin", name: "Baratin", category: "Professionnelle"},
              {value: "Marchandage", name: "Marchandage", category: "Professionnelle"},
              {value: "Médecine", name: "Médecine", category: "Professionnelle"},
              {value: "Métier", name: "Métier", category: "Professionnelle"}
            ]
          },
          {
            key: "habilites[].options",
            type: "strapselect",
            // onChange: function (modelValue, form) {
            //   if (modelValue.length > 3) {
            //     // var set1 = new Set(modelValue);
            //     // var set2 = new Set(this.last_value);
            //     // var difference = new Set([...set1].filter(x => !set2.has(x)));
            //     // console.log(difference);
            //     // var difference = [];
            //     // jQuery.grep(this.last_value, function (el) {
            //     //   if (jQuery.inArray(el, modelValue) == -1) difference.push(el);
            //     // });
            //     // console.log(difference);
            //     $scope.model.habilites[arrayIndex].option = this.last_value;
            //   } else {
            //     this.last_value = modelValue;
            //   }
            // },
            options: {
              multiple: "true",
              filterTriggers: ["model.habilites[arrayIndex].habilite"],
              filter: "model.habilites[arrayIndex].habilite==item.category",
              inlineMaxLength: 5
            },
            placeholder: "",
            titleMap: [
              {value: "Résilience", name: "Résilience", category: "Discipline"},
              {value: "Endurcie", name: "Endurcie", category: "Discipline"},
              {value: "Loyauté", name: "Loyauté", category: "Discipline"},
              {value: "Doctrine", name: "Doctrine", category: "Discipline"},
              {value: "Vigilance", name: "Vigilance", category: "Discipline"},

              {value: "Karma_1", name: "+2", category: "Karma"},
              {value: "Karma_2", name: "+2", category: "Karma"},
              {value: "Karma_3", name: "+2", category: "Karma"},
              {value: "Karma_4", name: "+2", category: "Karma"},
              {value: "Karma_5", name: "+2", category: "Karma"},

              {value: "Assaut", name: "Assaut", category: "Offense"},
              {value: "Jambette", name: "Jambette", category: "Offense"},
              {value: "Désarmement", name: "Désarmement", category: "Offense"},
              {value: "Coupe-souffle", name: "Coupe-souffle", category: "Offense"},
              {value: "Charge", name: "Charge", category: "Offense"},

              {value: "Esquive", name: "Esquive", category: "Défense"},
              {value: "Déflexion", name: "Déflexion", category: "Défense"},
              {value: "Déviation", name: "Déviation", category: "Défense"},
              {value: "Santé", name: "Santé", category: "Défense"},
              {value: "Second Souffle", name: "Second Souffle", category: "Défense"},

              {value: "Alchimie_1", name: "4", category: "Alchimie"},
              {value: "Alchimie_2", name: "+2", category: "Alchimie"},
              {value: "Alchimie_3", name: "+2", category: "Alchimie"},
              {value: "Alchimie_4", name: "+2", category: "Alchimie"},
              {value: "Alchimie_5", name: "+2", category: "Alchimie"},

              {value: "Camouflage", name: "Camouflage", category: "Embuscade"},
              {value: "Dissimulation", name: "Dissimulation", category: "Embuscade"},
              {value: "Capture", name: "Capture", category: "Embuscade"},
              {value: "Piège", name: "Piège", category: "Embuscade"},
              {value: "Aveuglement", name: "Aveuglement", category: "Embuscade"},

              {value: "Attaque sournoise", name: "Attaque sournoise", category: "Fourberie"},
              {value: "Coup bas", name: "Coup bas", category: "Fourberie"},
              {value: "Coup sonnant", name: "Coup sonnant", category: "Fourberie"},
              {value: "Coupe-jarret", name: "Coupe-jarret", category: "Fourberie"},
              {value: "Stylet", name: "Stylet", category: "Fourberie"},

              {value: "Serrurier", name: "Serrurier", category: "Travail de précision"},
              {value: "Évasion", name: "Évasion", category: "Travail de précision"},
              {value: "Désamorçage", name: "Désamorçage", category: "Travail de précision"},
              {value: "Torture", name: "Torture", category: "Travail de précision"},
              {value: "Vol à la tire", name: "Vol à la tire", category: "Travail de précision"},

              {value: "Mixture de potions", name: "Mixture de potions", category: "Artisanat Arcane"},
              {value: "Enchantement", name: "Enchantement", category: "Artisanat Arcane"},
              {value: "Infusion", name: "Infusion", category: "Artisanat Arcane"},
              {value: "Réparation", name: "Réparation", category: "Artisanat Arcane"},
              {value: "Disjonction", name: "Disjonction", category: "Artisanat Arcane"},

              {value: "Rituel_1", name: "6", category: "Rituel"},
              {value: "Rituel_2", name: "+3", category: "Rituel"},
              {value: "Rituel_3", name: "+3", category: "Rituel"},
              {value: "Rituel_4", name: "+3", category: "Rituel"},
              {value: "Rituel_5", name: "+3", category: "Rituel"},

              {value: "Frénésie", name: "Frénésie", category: "Sorcellerie"},
              {value: "Terreur", name: "Terreur", category: "Sorcellerie"},
              {value: "Noirceur", name: "Noirceur", category: "Sorcellerie"},
              {value: "Silence", name: "Silence", category: "Sorcellerie"},
              {value: "Éclair", name: "Éclair", category: "Sorcellerie"},

              {value: "Guérison", name: "Guérison", category: "Thaumaturgie"},
              {value: "Réanimation", name: "Réanimation", category: "Thaumaturgie"},
              {value: "Réssurection", name: "Réssurection", category: "Thaumaturgie"},
              {value: "Liberté", name: "Liberté", category: "Thaumaturgie"},
              {value: "Voix", name: "Voix", category: "Thaumaturgie"},

              {value: "Diplomatie", name: "Diplomatie", category: "Baratin"},
              {value: "Mensonge", name: "Mensonge", category: "Baratin"},
              {value: "Revenu", name: "Revenu", category: "Baratin"},
              {value: "Verbomoteur", name: "Verbomoteur", category: "Baratin"},
              {value: "Discours", name: "Discours", category: "Baratin"},

              {value: "Marchandage_1", name: "4", category: "Marchandage"},
              {value: "Marchandage_2", name: "+2", category: "Marchandage"},
              {value: "Marchandage_3", name: "+2", category: "Marchandage"},
              {value: "Marchandage_4", name: "+2", category: "Marchandage"},
              {value: "Marchandage_5", name: "+2", category: "Marchandage"},

              {value: "Opération", name: "Opération", category: "Médecine"},
              {value: "Suture", name: "Suture", category: "Médecine"},
              {value: "Psychiatrie", name: "Psychiatrie", category: "Médecine"},
              {value: "Relaxation", name: "Relaxation", category: "Médecine"},
              {value: "Pharmacie", name: "Pharmacie", category: "Médecine"},

              {value: "Artisinat", name: "Artisinat", category: "Métier"},
              {value: "Forge", name: "Forge", category: "Métier"},
              {value: "Herboristerie", name: "Herboristerie", category: "Métier"},
              {value: "Spécialiste I - Herboristerie", name: "Spécialiste I - Herboristerie", category: "Métier"},
              {value: "Spécialiste I - Artisanat", name: "Spécialiste I - Artisanat", category: "Métier"},
              {value: "Spécialiste I - Enchantement", name: "Spécialiste I - Enchantement", category: "Métier"},
              {value: "Spécialiste I - Forge", name: "Spécialiste I - Forge", category: "Métier"},
              {
                value: "Spécialiste I - Mixture de Potion",
                name: "Spécialiste I - Mixture de Potion",
                category: "Métier"
              },
              {value: "Spécialiste II - Herboristerie", name: "Spécialiste II - Herboristerie", category: "Métier"},
              {value: "Spécialiste II - Artisanat", name: "Spécialiste II - Artisanat", category: "Métier"},
              {value: "Spécialiste II - Enchantement", name: "Spécialiste II - Enchantement", category: "Métier"},
              {value: "Spécialiste II - Forge", name: "Spécialiste II - Forge", category: "Métier"},
              {
                value: "Spécialiste II - Mixture de Potion",
                name: "Spécialiste II - Mixture de Potion",
                category: "Métier"
              }
            ]
          }
        ]
      },
      {
        key: "rituel_ecole",
        type: "strapselect",
        placeholder: "",
        options: {
          multiple: "true"
        },
        titleMap: [
          {value: "Démonologie", name: "Démonologie"},
          {value: "Nécromancie", name: "Nécromancie"},
          {value: "Nature", name: "Nature"},
          {value: "Protection", name: "Protection"},
          {value: "Élémentaire", name: "Élémentaire"}
        ]
      },
      {
        key: "rituel",
        add: "Ajout d'un rituel",
        style: {
          add: "btn-success"
        },
      },
      {
        key: "technique_maitre",
        add: "Ajouter Technique de maitre",
        style: {
          add: "btn-success"
        },
      }
    ];
  }
}