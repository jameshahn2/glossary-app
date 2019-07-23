import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    this.store.createRecord("term", {
      url:
        "https://www.glossary.oilfield.slb.com/en/Terms/c/coal-seam_gas.aspx",
      word: "CSG",
      definitions: [
        {
          speech_type: "n.",
          category: "Geology",
          definition:
            "Natural gas, predominantly methane [CH4], generated during coal formation and adsorbed in coal.",
          see: [
            {
              title: "unconventional resource",
              link:
                "https://www.glossary.oilfield.slb.com/en/Terms/u/unconventional_resource.aspx"
            }
          ],
          more_details: [
            {
              title: "Learning to Produce Coalbed Methane",
              link:
                "http://www.slb.com/resources/publications/industry_articles/oilfield_review/1991/or1991jan04_methane.aspx"
            },
            {
              title: "Producing Natural Gas from Coal",
              link:
                "http://www.slb.com/resources/publications/industry_articles/oilfield_review/2003/or2003aut02_gas_from_coal.aspx"
            },
            {
              title: "Coalbed Methane: Clean Energy for the World",
              link:
                "http://www.slb.com/resources/publications/industry_articles/oilfield_review/2009/or2009sum01_coalbed_methane.aspx"
            }
          ],
          synonyms: [
            {
              title: "coalbed methane",
              link:
                "https://www.glossary.oilfield.slb.com/en/Terms/c/coalbed_methane.aspx"
            },
            {
              title: "coal bed methane",
              link:
                "https://www.glossary.oilfield.slb.com/en/Terms/c/coal_bed_methane.aspx"
            },
            {
              title: "coal-bed methane",
              link:
                "https://www.glossary.oilfield.slb.com/en/Terms/c/coal-bed_methane.aspx"
            },
            {
              title: "CBM",
              link: "https://www.glossary.oilfield.slb.com/en/Terms/c/cbm.aspx"
            }
          ],
          antonyms: [],
          alternate_forms: "coal seam gas, CSG",
          image: {
            src:
              "https://www.glossary.oilfield.slb.com/en/Terms/c/en/~/media/PublicMedia/geology/coalbedMethane01.ashx",
            caption:
              "Gas adsorption and desorption in coal. During coalification, the matrix shrinks, creating orthogonal fractures called cleats. Face cleats tend to be continuous; butt cleats are at right angles to face cleats. Typically, water fills the void spaces of the coal matrix. As the water is produced and the formation pressure decreases, methane—adsorbed on the surfaces of the coal matrix and stored in the micropores—is liberated. The gas then diffuses through the matrix (red arrows), migrates into the cleats and fractures and eventually reaches the wellbore."
          }
        }
      ]
    });
    return this.store.peekAll("term");
  }
});
