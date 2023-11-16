let people = {
    "characters": [
      {
        "id": 1,
        "name": "Luke Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        "homeworld": "tatooine"
      },
      {
        "id": 2,
        "name": "C-3PO",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        "homeworld": "tatooine"
      },
      {
        "id": 3,
        "name": "R2-D2",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        "homeworld": "naboo"
      },
      {
        "id": 4,
        "name": "Darth Vader",
        "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        "homeworld": "tatooine"
      },
      {
        "id": 5,
        "name": "Leia Organa",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        "homeworld": "alderaan"
      },
      {
        "id": 6,
        "name": "Owen Lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        "homeworld": "tatooine"
      },
      {
        "id": 7,
        "name": "Beru Whitesun lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        "homeworld": "tatooine"
      },
      {
        "id": 8,
        "name": "R5-D4",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        "homeworld": "tatooine"
      },
      {
        "id": 9,
        "name": "Biggs Darklighter",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        "homeworld": "tatooine"
      },
      {
        "id": 10,
        "name": "Obi-Wan Kenobi",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        "homeworld": "stewjon"
      },
      {
        "id": 11,
        "name": "Anakin Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        "homeworld": "tatooine"
      },
      {
        "id": 12,
        "name": "Wilhuff Tarkin",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        "homeworld": "eriadu"
      },
      {
        "id": 13,
        "name": "Chewbacca",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        "homeworld": "kashyyyk"
      },
      {
        "id": 14,
        "name": "Han Solo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        "homeworld": "corellia"
      },
      {
        "id": 15,
        "name": "Greedo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        "homeworld": "Rodia"
      },
      {
        "id": 16,
        "name": "Jabba Desilijic Tiure",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        "homeworld": "tatooine"
      },
      {
        "id": 18,
        "name": "Wedge Antilles",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
        "homeworld": "corellia"
      },
      {
        "id": 19,
        "name": "Jek Tono Porkins",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        "homeworld": "bestine"
      },
      {
        "id": 20,
        "name": "Yoda",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
      },
      {
        "id": 21,
        "name": "Palpatine",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        "homeworld": "naboo"
      }
    ]
  };
  let card_count = document.getElementsByClassName("card").length;
  let homeworldsRaw = [];
  for(let i=0;i<card_count;i++)
  {
      homeworldsRaw.push(people.characters[i].homeworld)
  }
  for(let i=0;i<card_count;i++)
  {
      if(homeworldsRaw[i] == null || undefined)
      {
          homeworldsRaw[i] = "other";
      }
  }
  let homeworldsUnique = [];
  homeworldsRaw.forEach(element => {
      if(!homeworldsUnique.includes(element))
      {
          homeworldsUnique.push(element);
      }
  });
  let rad = document.myForm.flexRadioDefault;  
  function func(evt)
  {
      document.getElementsByClassName("btn")[0].classList.replace("btn-success","btn-danger")
      document.getElementsByClassName("btn")[0].innerHTML = "Karakterleri Gizle"
      document.getElementById("cardiv").style.display="block";
      
      for(let i=0;i<card_count;i++)
      {
          document.getElementsByClassName("col-12")[i].classList.remove("order-x");
          if(evt.currentTarget.id == document.getElementsByClassName("card-text")[i].innerHTML)
          {
              document.getElementsByClassName("col-12")[i].classList.add("order-x");
          }
          if( evt.currentTarget.id != document.getElementsByClassName("card-text")[i].innerHTML)
          {
              document.getElementsByClassName("card")[i].style.display = "none";
          }
          else
          {
              document.getElementsByClassName("card")[i].style.display = "block";
          }
      }
  }
  for(let i=0;i<homeworldsUnique.length;i++)
  {
      document.getElementsByClassName("form-check-input")[i].id = homeworldsUnique[i];
      document.getElementsByClassName("form-check-label")[i].htmlFor = homeworldsUnique[i];
      document.getElementsByClassName("form-check-label")[i].innerHTML = homeworldsUnique[i].toUpperCase();
  }
  let filteredHomeworld = homeworldsUnique.filter((filter) =>
  {
      return filter
  })
  for(let i=0;i<card_count;i++)
  {
      document.getElementsByClassName("card-title")[i].innerHTML = people.characters[i].name;
      document.getElementsByClassName("card-text")[i].innerHTML = people.characters[i].homeworld;
      document.getElementsByClassName("card-img-top")[i].src = people.characters[i].pic;
      if(document.getElementsByClassName("card-text")[i].innerHTML == "undefined")
      {
          document.getElementsByClassName("card-text")[i].innerHTML = "other";
      }
  }
  function dnone()
  {
      for(let i=0;i<card_count;i++)
      {
          document.getElementsByClassName("col-12")[i].classList.remove("order-x");
      }
      if(document.getElementsByClassName("btn")[0].innerHTML == "Karakterleri Göster")
      {
          document.getElementById("cardiv").style.display = "block";
          for(let i=0;i<card_count;i++)
          {
              
              document.getElementsByClassName("card")[i].style.display = "block";
          }
          document.getElementsByClassName("btn")[0].innerHTML = "Karakterleri Gizle"
          document.getElementsByClassName("btn")[0].classList.replace("btn-success","btn-danger")
      }
      else
      {
          document.getElementById("cardiv").style.display = "none";
          document.getElementsByClassName("btn")[0].innerHTML = "Karakterleri Göster"
          document.getElementsByClassName("btn")[0].classList.replace("btn-danger","btn-success")
      }
      var ele = document.querySelectorAll("input[type=radio]");
      for(let i=0;i<ele.length;i++){
      ele[i].checked = false;
 }
  }
  for(let i=0;i<card_count;i++)
  {
      document.getElementsByClassName("card-img-top")[i].style.height="23rem"
  }