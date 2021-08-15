import React, {useState} from 'react';
import logo from '../logo.svg';

const Rss = () => {
  const [food1k, setFood1k] = useState();
  const [food10k, setFood10k] = useState();
  const [food50k, setFood50k] = useState();
  const [food150k, setFood150k] = useState();
  const [food500k, setFood500k] = useState();
  const [food1500k, setFood1500k] = useState();
  const [food5kk, setFood5kk] = useState();
  const [foodTotal, setFoodTotal] = useState();

  const [wood1k, setWood1k] = useState();
  const [wood10k, setWood10k] = useState();
  const [wood50k, setWood50k] = useState();
  const [wood150k, setWood150k] = useState();
  const [wood500k, setWood500k] = useState();
  const [wood1500k, setWood1500k] = useState();
  const [wood5kk, setWood5kkk] = useState();
  const [woodTotal, setWoodTotal] = useState();

  const [stone750, setStone750] = useState();
  const [stone7500, setStone7500] = useState();
  const [stone37500, setStone37500] = useState();
  const [stone112k, setStone112k] = useState();
  const [stone375k, setStone375k] = useState();
  const [stone1m, setStone1m] = useState();
  const [stone3kk, setSton3kk] = useState();
  const [stoneTotal, setStoneTotal] = useState();

  const [gold500, setGold500] = useState();
  const [gold3000, setGold3000] = useState();
  const [gold15k, setGold15k] = useState();
  const [gold50k, setGold50k] = useState();
  const [gold200k, setGold200k] = useState();
  const [gold600k, seGold600k] = useState();
  const [gold2kk, setGold2kk] = useState();
  const [goldTotal, setGoldTotal] = useState();

  const [pickOneLvl1, setPickOneLvl1] = useState();
  const [pickOneLvl1Food, setPickOneLvl1Food] = useState(false);
  const [pickOneLvl1Wood, setPickOneLvl1Wood] = useState(false);
  const [pickOneLvl1Stone, setPickOneLvl1Stone] = useState(false);
  const [pickOneLvl1Gold, setPickOneLvl1Gold] = useState(false);

  const [pickOneLvl2, setPickOneLvl2] = useState();
  const [pickOneLvl2Food, setPickOneLvl2Food] = useState(false);
  const [pickOneLvl2Wood, setPickOneLvl2Wood] = useState(false);
  const [pickOneLvl2Stone, setPickOneLvl2Stone] = useState(false);
  const [pickOneLvl2Gold, setPickOneLvl2Gold] = useState(false);

  const [pickOneLvl3, setPickOneLvl3] = useState();
  const [pickOneLvl3Food, setPickOneLvl3Food] = useState(false);
  const [pickOneLvl3Wood, setPickOneLvl3Wood] = useState(false);
  const [pickOneLvl3Stone, setPickOneLvl3Stone] = useState(false);
  const [pickOneLvl3Gold, setPickOneLvl3Gold] = useState(false);

  const [pickOneLvl4, setPickOneLvl4] = useState();
  const [pickOneLvl4Food, setPickOneLvl4Food] = useState(false);
  const [pickOneLvl4Wood, setPickOneLvl4Wood] = useState(false);
  const [pickOneLvl4Stone, setPickOneLvl4Stone] = useState(false);
  const [pickOneLvl4Gold, setPickOneLvl4Gold] = useState(false);

  const [rssPackLvl1A, setRssPack1A] = useState();
  const [rssPackLvl1B, setRssPack1B] = useState();
  const [rssPackLvl1C, setRssPack1C] = useState();
  const [rssPackLvl2, setRssPack2] = useState();

  const [onStoreFood, setOnStoreFood] = useState();
  const [onStoreWood, setOnStoreWood] = useState();
  const [onStoreStone, setOnStoreStone] = useState();
  const [onStoreGold, setOnStoreGold] = useState();

  const getPackLvl1A = () => {
    const pickLvl1ToCount = rssPackLvl1A ? rssPackLvl1A : 0;
    const returnArr = [0, 0];
    if (pickLvl1ToCount) {
      returnArr[0] = Math.floor(pickLvl1ToCount / 2);
      returnArr[1] = pickLvl1ToCount - returnArr[0];
    }

    return returnArr;
  };
  const getPackLvl1B = () => {
    const pickLvl1ToCount = rssPackLvl1B ? rssPackLvl1B : 0;
    const returnArr = [0, 0, 0];
    if (pickLvl1ToCount) {
      returnArr[0] = Math.floor(pickLvl1ToCount / 3);
      returnArr[1] = Math.floor((pickLvl1ToCount - returnArr[0]) / 2);
      returnArr[2] = pickLvl1ToCount - returnArr[0] - returnArr[1];
    }

    return returnArr;
  };

  const getPackLvl1C = () => {
    const pickLvl1ToCount = rssPackLvl1C ? rssPackLvl1C : 0;
    const returnArr = [0, 0, 0, 0];
    if (pickLvl1ToCount) {
      returnArr[0] = Math.floor(pickLvl1ToCount / 4);
      returnArr[1] = Math.floor((pickLvl1ToCount - returnArr[0]) / 3);
      returnArr[2] = Math.floor((pickLvl1ToCount - returnArr[0] - returnArr[1]) / 2);
      returnArr[3] = pickLvl1ToCount - returnArr[0] - returnArr[1] - returnArr[2];
    }

    return returnArr;
  };

  const getPackLvl2 = () => {
    const pickLvl1ToCount = rssPackLvl2 ? rssPackLvl2 : 0;
    const returnArr = [0, 0, 0, 0];
    if (pickLvl1ToCount) {
      returnArr[0] = Math.floor(pickLvl1ToCount / 4);
      returnArr[1] = Math.floor((pickLvl1ToCount - returnArr[0]) / 3);
      returnArr[2] = Math.floor((pickLvl1ToCount - returnArr[0] - returnArr[1]) / 2);
      returnArr[3] = pickLvl1ToCount - returnArr[0] - returnArr[1] - returnArr[2];
    }

    return returnArr;
  };

  const getFoodPakTotal = () => {
    const totalFood1k = (food1k ? food1k : 0) * 1000;
    const totalFood10k = (food10k ? food10k : 0) * 10000;
    const totalFood50k = (food50k ? food50k : 0) * 50000;
    const totalFood150k = (food150k ? food150k : 0) * 150000;
    const totalFood500k = (food500k ? food500k : 0) * 500000;
    const totalFood15m = (food1500k ? food1500k : 0) * 1500000;
    const totalFood5m = (food5kk ? food5kk : 0) * 5000000;

    return (
      totalFood1k +
      totalFood10k +
      totalFood50k +
      totalFood150k +
      totalFood500k +
      totalFood15m +
      totalFood5m
    );
  };

  const getPickOneLvl1Counts = () => {
    const pickOneLvl1ToCount = pickOneLvl1 ? pickOneLvl1 : 0;

    const levelOneCounts = [];

    if (pickOneLvl1Food) {
      levelOneCounts[0] = pickOneLvl1ToCount;
      if (pickOneLvl1Wood) {
        levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 2);
        levelOneCounts[1] = pickOneLvl1ToCount - levelOneCounts[0];
        if (pickOneLvl1Stone) {
          levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 3);
          levelOneCounts[1] = Math.floor((pickOneLvl1ToCount - levelOneCounts[0]) / 2);
          levelOneCounts[2] = pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[1];
          if (pickOneLvl1Gold) {
            levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 4);
            levelOneCounts[1] = Math.floor((pickOneLvl1ToCount - levelOneCounts[0]) / 3);
            levelOneCounts[2] = Math.floor(
              (pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[1]) / 2
            );
            levelOneCounts[3] =
              pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[1] - levelOneCounts[2];
          } else {
            levelOneCounts[3] = 0;
          }
        } else {
          levelOneCounts[2] = 0;
          if (pickOneLvl1Gold) {
            levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 3);
            levelOneCounts[1] = Math.floor((pickOneLvl1ToCount - levelOneCounts[0]) / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[1];
          } else {
            levelOneCounts[3] = 0;
          }
        }
      } else {
        levelOneCounts[1] = 0;
        if (pickOneLvl1Stone) {
          levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 2);
          levelOneCounts[2] = pickOneLvl1ToCount - levelOneCounts[0];
          if (pickOneLvl1Gold) {
            levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 3);
            levelOneCounts[2] = Math.floor((pickOneLvl1ToCount - levelOneCounts[0]) / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[2];
          } else {
            levelOneCounts[3] = 0;
          }
        } else {
          levelOneCounts[2] = 0;
          if (pickOneLvl1Gold) {
            levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[0];
          } else {
            levelOneCounts[3] = 0;
          }
        }
      }
    } else {
      levelOneCounts[0] = 0;
      if (pickOneLvl1Wood) {
        levelOneCounts[1] = pickOneLvl1ToCount;
        if (pickOneLvl1Stone) {
          levelOneCounts[1] = Math.floor(pickOneLvl1ToCount / 2);
          levelOneCounts[2] = pickOneLvl1ToCount - levelOneCounts[1];
          if (pickOneLvl1Gold) {
            levelOneCounts[1] = Math.floor(pickOneLvl1ToCount / 3);
            levelOneCounts[2] = Math.floor((pickOneLvl1ToCount - levelOneCounts[1]) / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[1] - levelOneCounts[2];
          } else {
            levelOneCounts[3] = 0;
          }
        } else {
          levelOneCounts[2] = 0;
          if (pickOneLvl1Gold) {
            levelOneCounts[1] = Math.floor(pickOneLvl1ToCount / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[1];
          } else {
            levelOneCounts[3] = 0;
          }
        }
      } else {
        levelOneCounts[1] = 0;
        if (pickOneLvl1Stone) {
          levelOneCounts[2] = pickOneLvl1ToCount;
          if (pickOneLvl1Gold) {
            levelOneCounts[2] = Math.floor(pickOneLvl1ToCount / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[2];
          } else {
            levelOneCounts[3] = 0;
          }
        } else {
          levelOneCounts[2] = 0;
          if (pickOneLvl1Gold) {
            levelOneCounts[3] = pickOneLvl1ToCount;
          } else {
            levelOneCounts[3] = 0;
          }
        }
      }
    }
    return levelOneCounts;
  };

  const getPickOneLvl2Counts = () => {
    const pickOneLvl1ToCount = pickOneLvl2 ? pickOneLvl2 : 0;

    const levelOneCounts = [];

    if (pickOneLvl2Food) {
      levelOneCounts[0] = pickOneLvl1ToCount;
      if (pickOneLvl2Wood) {
        levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 2);
        levelOneCounts[1] = pickOneLvl1ToCount - levelOneCounts[0];
        if (pickOneLvl2Stone) {
          levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 3);
          levelOneCounts[1] = Math.floor((pickOneLvl1ToCount - levelOneCounts[0]) / 2);
          levelOneCounts[2] = pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[1];
          if (pickOneLvl2Gold) {
            levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 4);
            levelOneCounts[1] = Math.floor((pickOneLvl1ToCount - levelOneCounts[0]) / 3);
            levelOneCounts[2] = Math.floor(
              (pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[1]) / 2
            );
            levelOneCounts[3] =
              pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[1] - levelOneCounts[2];
          } else {
            levelOneCounts[3] = 0;
          }
        } else {
          levelOneCounts[2] = 0;
          if (pickOneLvl2Gold) {
            levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 3);
            levelOneCounts[1] = Math.floor((pickOneLvl1ToCount - levelOneCounts[0]) / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[1];
          } else {
            levelOneCounts[3] = 0;
          }
        }
      } else {
        levelOneCounts[1] = 0;
        if (pickOneLvl2Stone) {
          levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 2);
          levelOneCounts[2] = pickOneLvl1ToCount - levelOneCounts[0];
          if (pickOneLvl2Gold) {
            levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 3);
            levelOneCounts[2] = Math.floor((pickOneLvl1ToCount - levelOneCounts[0]) / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[2];
          } else {
            levelOneCounts[3] = 0;
          }
        } else {
          levelOneCounts[2] = 0;
          if (pickOneLvl2Gold) {
            levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[0];
          } else {
            levelOneCounts[3] = 0;
          }
        }
      }
    } else {
      levelOneCounts[0] = 0;
      if (pickOneLvl2Wood) {
        levelOneCounts[1] = pickOneLvl1ToCount;
        if (pickOneLvl2Stone) {
          levelOneCounts[1] = Math.floor(pickOneLvl1ToCount / 2);
          levelOneCounts[2] = pickOneLvl1ToCount - levelOneCounts[1];
          if (pickOneLvl2Gold) {
            levelOneCounts[1] = Math.floor(pickOneLvl1ToCount / 3);
            levelOneCounts[2] = Math.floor((pickOneLvl1ToCount - levelOneCounts[1]) / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[1] - levelOneCounts[2];
          } else {
            levelOneCounts[3] = 0;
          }
        } else {
          levelOneCounts[2] = 0;
          if (pickOneLvl2Gold) {
            levelOneCounts[1] = Math.floor(pickOneLvl1ToCount / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[1];
          } else {
            levelOneCounts[3] = 0;
          }
        }
      } else {
        levelOneCounts[1] = 0;
        if (pickOneLvl2Stone) {
          levelOneCounts[2] = pickOneLvl1ToCount;
          if (pickOneLvl2Gold) {
            levelOneCounts[2] = Math.floor(pickOneLvl1ToCount / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[2];
          } else {
            levelOneCounts[3] = 0;
          }
        } else {
          levelOneCounts[2] = 0;
          if (pickOneLvl2Gold) {
            levelOneCounts[3] = pickOneLvl1ToCount;
          } else {
            levelOneCounts[3] = 0;
          }
        }
      }
    }
    return levelOneCounts;
  };

  const getPickOneLvl3Counts = () => {
    const pickOneLvl1ToCount = pickOneLvl3 ? pickOneLvl3 : 0;

    const levelOneCounts = [];

    if (pickOneLvl3Food) {
      levelOneCounts[0] = pickOneLvl1ToCount;
      if (pickOneLvl3Wood) {
        levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 2);
        levelOneCounts[1] = pickOneLvl1ToCount - levelOneCounts[0];
        if (pickOneLvl3Stone) {
          levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 3);
          levelOneCounts[1] = Math.floor((pickOneLvl1ToCount - levelOneCounts[0]) / 2);
          levelOneCounts[2] = pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[1];
          if (pickOneLvl3Gold) {
            levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 4);
            levelOneCounts[1] = Math.floor((pickOneLvl1ToCount - levelOneCounts[0]) / 3);
            levelOneCounts[2] = Math.floor(
              (pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[1]) / 2
            );
            levelOneCounts[3] =
              pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[1] - levelOneCounts[2];
          } else {
            levelOneCounts[3] = 0;
          }
        } else {
          levelOneCounts[2] = 0;
          if (pickOneLvl3Gold) {
            levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 3);
            levelOneCounts[1] = Math.floor((pickOneLvl1ToCount - levelOneCounts[0]) / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[1];
          } else {
            levelOneCounts[3] = 0;
          }
        }
      } else {
        levelOneCounts[1] = 0;
        if (pickOneLvl3Stone) {
          levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 2);
          levelOneCounts[2] = pickOneLvl1ToCount - levelOneCounts[0];
          if (pickOneLvl3Gold) {
            levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 3);
            levelOneCounts[2] = Math.floor((pickOneLvl1ToCount - levelOneCounts[0]) / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[2];
          } else {
            levelOneCounts[3] = 0;
          }
        } else {
          levelOneCounts[2] = 0;
          if (pickOneLvl3Gold) {
            levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[0];
          } else {
            levelOneCounts[3] = 0;
          }
        }
      }
    } else {
      levelOneCounts[0] = 0;
      if (pickOneLvl3Wood) {
        levelOneCounts[1] = pickOneLvl1ToCount;
        if (pickOneLvl3Stone) {
          levelOneCounts[1] = Math.floor(pickOneLvl1ToCount / 2);
          levelOneCounts[2] = pickOneLvl1ToCount - levelOneCounts[1];
          if (pickOneLvl3Gold) {
            levelOneCounts[1] = Math.floor(pickOneLvl1ToCount / 3);
            levelOneCounts[2] = Math.floor((pickOneLvl1ToCount - levelOneCounts[1]) / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[1] - levelOneCounts[2];
          } else {
            levelOneCounts[3] = 0;
          }
        } else {
          levelOneCounts[2] = 0;
          if (pickOneLvl3Gold) {
            levelOneCounts[1] = Math.floor(pickOneLvl1ToCount / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[1];
          } else {
            levelOneCounts[3] = 0;
          }
        }
      } else {
        levelOneCounts[1] = 0;
        if (pickOneLvl3Stone) {
          levelOneCounts[2] = pickOneLvl1ToCount;
          if (pickOneLvl3Gold) {
            levelOneCounts[2] = Math.floor(pickOneLvl1ToCount / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[2];
          } else {
            levelOneCounts[3] = 0;
          }
        } else {
          levelOneCounts[2] = 0;
          if (pickOneLvl3Gold) {
            levelOneCounts[3] = pickOneLvl1ToCount;
          } else {
            levelOneCounts[3] = 0;
          }
        }
      }
    }
    return levelOneCounts;
  };

  const getPickOneLvl4Counts = () => {
    const pickOneLvl1ToCount = pickOneLvl4 ? pickOneLvl4 : 0;

    const levelOneCounts = [];

    if (pickOneLvl4Food) {
      levelOneCounts[0] = pickOneLvl1ToCount;
      if (pickOneLvl4Wood) {
        levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 2);
        levelOneCounts[1] = pickOneLvl1ToCount - levelOneCounts[0];
        if (pickOneLvl4Stone) {
          levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 3);
          levelOneCounts[1] = Math.floor((pickOneLvl1ToCount - levelOneCounts[0]) / 2);
          levelOneCounts[2] = pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[1];
          if (pickOneLvl4Gold) {
            levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 4);
            levelOneCounts[1] = Math.floor((pickOneLvl1ToCount - levelOneCounts[0]) / 3);
            levelOneCounts[2] = Math.floor(
              (pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[1]) / 2
            );
            levelOneCounts[3] =
              pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[1] - levelOneCounts[2];
          } else {
            levelOneCounts[3] = 0;
          }
        } else {
          levelOneCounts[2] = 0;
          if (pickOneLvl4Gold) {
            levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 3);
            levelOneCounts[1] = Math.floor((pickOneLvl1ToCount - levelOneCounts[0]) / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[1];
          } else {
            levelOneCounts[3] = 0;
          }
        }
      } else {
        levelOneCounts[1] = 0;
        if (pickOneLvl4Stone) {
          levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 2);
          levelOneCounts[2] = pickOneLvl1ToCount - levelOneCounts[0];
          if (pickOneLvl4Gold) {
            levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 3);
            levelOneCounts[2] = Math.floor((pickOneLvl1ToCount - levelOneCounts[0]) / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[0] - levelOneCounts[2];
          } else {
            levelOneCounts[3] = 0;
          }
        } else {
          levelOneCounts[2] = 0;
          if (pickOneLvl4Gold) {
            levelOneCounts[0] = Math.floor(pickOneLvl1ToCount / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[0];
          } else {
            levelOneCounts[3] = 0;
          }
        }
      }
    } else {
      levelOneCounts[0] = 0;
      if (pickOneLvl4Wood) {
        levelOneCounts[1] = pickOneLvl1ToCount;
        if (pickOneLvl4Stone) {
          levelOneCounts[1] = Math.floor(pickOneLvl1ToCount / 2);
          levelOneCounts[2] = pickOneLvl1ToCount - levelOneCounts[1];
          if (pickOneLvl4Gold) {
            levelOneCounts[1] = Math.floor(pickOneLvl1ToCount / 3);
            levelOneCounts[2] = Math.floor((pickOneLvl1ToCount - levelOneCounts[1]) / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[1] - levelOneCounts[2];
          } else {
            levelOneCounts[3] = 0;
          }
        } else {
          levelOneCounts[2] = 0;
          if (pickOneLvl4Gold) {
            levelOneCounts[1] = Math.floor(pickOneLvl1ToCount / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[1];
          } else {
            levelOneCounts[3] = 0;
          }
        }
      } else {
        levelOneCounts[1] = 0;
        if (pickOneLvl4Stone) {
          levelOneCounts[2] = pickOneLvl1ToCount;
          if (pickOneLvl4Gold) {
            levelOneCounts[2] = Math.floor(pickOneLvl1ToCount / 2);
            levelOneCounts[3] = pickOneLvl1ToCount - levelOneCounts[2];
          } else {
            levelOneCounts[3] = 0;
          }
        } else {
          levelOneCounts[2] = 0;
          if (pickOneLvl4Gold) {
            levelOneCounts[3] = pickOneLvl1ToCount;
          } else {
            levelOneCounts[3] = 0;
          }
        }
      }
    }
    return levelOneCounts;
  };

  const getPickOneFood = () => {
    return (
      getPickOneLvl1Counts()[0] * 10000 +
      getPickOneLvl2Counts()[0] * 50000 +
      getPickOneLvl3Counts()[0] * 150000 +
      getPickOneLvl4Counts()[0] * 500000
    );
  };

  const getPickOneWood = () => {
    return (
      getPickOneLvl1Counts()[1] * 10000 +
      getPickOneLvl2Counts()[1] * 50000 +
      getPickOneLvl3Counts()[1] * 150000 +
      getPickOneLvl4Counts()[1] * 500000
    );
  };

  const getPickOneStone = () => {
    return (
      getPickOneLvl1Counts()[2] * 7500 +
      getPickOneLvl2Counts()[2] * 37500 +
      getPickOneLvl3Counts()[2] * 112500 +
      getPickOneLvl4Counts()[2] * 375000
    );
  };

  const getPickOneGold = () => {
    return (
      getPickOneLvl1Counts()[3] * 3000 +
      getPickOneLvl2Counts()[3] * 15000 +
      getPickOneLvl3Counts()[3] * 50000 +
      getPickOneLvl4Counts()[3] * 200000
    );
  };

  const getLvlRssPackFood = () => {
    return (
      getPackLvl1A()[0] * 1000 +
      getPackLvl1B()[0] * 1000 +
      getPackLvl1C()[0] * 1000 +
      getPackLvl2()[0] * 10000
    );
  };

  const getLvlRssPackWood = () => {
    return (
      getPackLvl1A()[1] * 1000 +
      getPackLvl1B()[1] * 1000 +
      getPackLvl1C()[1] * 1000 +
      getPackLvl2()[1] * 10000
    );
  };

  const getLvlRssPackStone = () => {
    return getPackLvl1B()[2] * 750 + getPackLvl1C()[2] * 750 + getPackLvl2()[2] * 7500;
  };

  const getLvlRssPackGold = () => {
    return getPackLvl1C()[3] * 500 + getPackLvl2()[3] * 5000;
  };

  const getWoodPakTotal = () => {
    const totalFood1k = (wood1k ? wood1k : 0) * 1000;
    const totalFood10k = (wood10k ? wood10k : 0) * 10000;
    const totalFood50k = (wood50k ? wood50k : 0) * 50000;
    const totalFood150k = (wood150k ? wood150k : 0) * 150000;
    const totalFood500k = (wood500k ? wood500k : 0) * 500000;
    const totalFood15m = (wood1500k ? wood1500k : 0) * 1500000;
    const totalFood5m = (wood5kk ? wood5kk : 0) * 5000000;

    return (
      totalFood1k +
      totalFood10k +
      totalFood50k +
      totalFood150k +
      totalFood500k +
      totalFood15m +
      totalFood5m
    );
  };

  const getStonePakTotal = () => {
    const totalFood1k = (stone750 ? stone750 : 0) * 750;
    const totalFood10k = (stone7500 ? stone7500 : 0) * 7500;
    const totalFood50k = (stone37500 ? stone37500 : 0) * 37500;
    const totalFood150k = (stone112k ? stone112k : 0) * 112500;
    const totalFood500k = (stone375k ? stone375k : 0) * 375000;
    const totalFood15m = (stone1m ? stone1m : 0) * 1125000;
    const totalFood5m = (stone3kk ? stone3kk : 0) * 3750000;

    return (
      totalFood1k +
      totalFood10k +
      totalFood50k +
      totalFood150k +
      totalFood500k +
      totalFood15m +
      totalFood5m
    );
  };

  const getGoldPakTotal = () => {
    const totalFood1k = (gold500 ? gold500 : 0) * 500;
    const totalFood10k = (gold3000 ? gold3000 : 0) * 3000;
    const totalFood50k = (gold15k ? gold15k : 0) * 15000;
    const totalFood150k = (gold50k ? gold50k : 0) * 50000;
    const totalFood500k = (gold200k ? gold200k : 0) * 200000;
    const totalFood15m = (gold600k ? gold600k : 0) * 600000;
    const totalFood5m = (gold2kk ? gold2kk : 0) * 2000000;

    return (
      totalFood1k +
      totalFood10k +
      totalFood50k +
      totalFood150k +
      totalFood500k +
      totalFood15m +
      totalFood5m
    );
  };

  const getGrandTotalFood = () => {
    return (
      getFoodPakTotal() +
      getPickOneFood() +
      getLvlRssPackFood() +
      (onStoreFood ? Number(onStoreFood) : 0)
    );
  };
  const getGrandTotalWood = () => {
    return (
      getWoodPakTotal() +
      getPickOneWood() +
      getLvlRssPackWood() +
      (onStoreWood ? Number(onStoreWood) : 0)
    );
  };
  const getGrandTotalStone = () => {
    return (
      getStonePakTotal() +
      getPickOneStone() +
      getLvlRssPackStone() +
      (onStoreStone ? Number(onStoreStone) : 0)
    );
  };

  const getGrandTotalGold = () => {
    return (
      getGoldPakTotal() +
      getPickOneGold() +
      getLvlRssPackGold() +
      (onStoreGold ? Number(onStoreGold) : 0)
    );
  };

  return (
    <section className="container custom-bg-color">
      <h2 className="title is-2">В сумке (Tokens)</h2>
      <div className="columns">
        <div className="column">
          <p className="subtitle is-4">Еда (Food)</p>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={food1k}
                  onChange={(event) => {
                    setFood1k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light">
                  1k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={food10k}
                  onChange={(event) => {
                    setFood10k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light ">
                  10k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={food50k}
                  onChange={(event) => {
                    setFood50k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light ">
                  50k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={food150k}
                  onChange={(event) => {
                    setFood150k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light ">
                  150k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={food500k}
                  onChange={(event) => {
                    setFood500k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light">
                  500k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={food1500k}
                  onChange={(event) => {
                    setFood1500k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light ">
                  1.5M
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={food5kk}
                  onChange={(event) => {
                    setFood5kk(event.target.value);
                  }}
                />
                <span className="icon is-small is-left has-text-white has-background-grey-light">
                  5M
                </span>
              </div>
            </div>
          </div>
          <p className="has-text-weight-bold">{`Сумма (Total): ${(
            getFoodPakTotal() / 1000000
          ).toFixed(2)}M`}</p>
        </div>
        <div className="column">
          <p className="subtitle is-4">Дерево (Wood)</p>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={wood1k}
                  onChange={(event) => {
                    setWood1k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light">
                  1k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={wood10k}
                  onChange={(event) => {
                    setWood10k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light ">
                  10k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={wood50k}
                  onChange={(event) => {
                    setWood50k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light ">
                  50k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={wood150k}
                  onChange={(event) => {
                    setWood150k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light ">
                  150k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={wood500k}
                  onChange={(event) => {
                    setWood500k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light">
                  500k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={wood1500k}
                  onChange={(event) => {
                    setWood1500k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light ">
                  1.5M
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={wood5kk}
                  onChange={(event) => {
                    setWood5kkk(event.target.value);
                  }}
                />
                <span className="icon is-small is-left has-text-white has-background-grey-light">
                  5M
                </span>
              </div>
            </div>
          </div>
          <p className="has-text-weight-bold">{`Сумма (Total): ${(
            getWoodPakTotal() / 1000000
          ).toFixed(2)}M`}</p>
        </div>
        <div className="column">
          <p className="subtitle is-4">Камень (Stone)</p>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={stone750}
                  onChange={(event) => {
                    setStone750(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light">
                  0.75k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={stone7500}
                  onChange={(event) => {
                    setStone7500(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light ">
                  7.5k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={stone37500}
                  onChange={(event) => {
                    setStone37500(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light ">
                  37.5k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={stone112k}
                  onChange={(event) => {
                    setStone112k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light ">
                  112k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={stone375k}
                  onChange={(event) => {
                    setStone375k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light">
                  375k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={stone1m}
                  onChange={(event) => {
                    setStone1m(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light ">
                  1.1M
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={stone3kk}
                  onChange={(event) => {
                    setSton3kk(event.target.value);
                  }}
                />
                <span className="icon is-small is-left has-text-white has-background-grey-light">
                  3.7M
                </span>
              </div>
            </div>
          </div>
          <p className="has-text-weight-bold">{`Сумма (Total): ${(
            getStonePakTotal() / 1000000
          ).toFixed(2)}M`}</p>
        </div>
        <div className="column">
          <p className="subtitle is-4">Золото (Gold)</p>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={gold500}
                  onChange={(event) => {
                    setGold500(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light">
                  0.5k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={gold3000}
                  onChange={(event) => {
                    setGold3000(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light ">
                  3k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={gold15k}
                  onChange={(event) => {
                    setGold15k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light ">
                  15k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={gold50k}
                  onChange={(event) => {
                    setGold50k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light ">
                  50k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={gold200k}
                  onChange={(event) => {
                    setGold200k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light">
                  200k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={gold600k}
                  onChange={(event) => {
                    seGold600k(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light ">
                  600k
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={gold2kk}
                  onChange={(event) => {
                    setGold2kk(event.target.value);
                  }}
                />
                <span className="icon is-small is-left has-text-white has-background-grey-light">
                  2M
                </span>
              </div>
            </div>
          </div>
          <p className="has-text-weight-bold">{`Сумма (Total): ${(
            getGoldPakTotal() / 1000000
          ).toFixed(2)}M`}</p>
        </div>
      </div>

      <h2 className="title is-2">Что-то одно (Pick One)</h2>
      <div className="columns">
        <div className="column">
          <p className="subtitle is-4">Ур. 1 (level 1)</p>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={pickOneLvl1}
                  onChange={(event) => {
                    setPickOneLvl1(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light"></span>
              </div>
            </div>
          </div>
          <div className="is-flex is-flex-direction-row is-justify-content-space-between">
            <div className="field ">
              Еда (Food):
              <label className="switch ml-3">
                <input
                  type="checkbox"
                  checked={pickOneLvl1Food}
                  onChange={() => {
                    setPickOneLvl1Food(!pickOneLvl1Food);
                  }}
                />

                <span className="slider round"></span>
              </label>
            </div>
            <div className="field ">
              Дерево (Wood):
              <label className="switch ml-3">
                <input
                  type="checkbox"
                  checked={pickOneLvl1Wood}
                  onChange={() => {
                    setPickOneLvl1Wood(!pickOneLvl1Wood);
                  }}
                />

                <span className="slider round"></span>
              </label>
            </div>
            <div className="field ">
              Камень (Stone):
              <label className="switch ml-3">
                <input
                  type="checkbox"
                  checked={pickOneLvl1Stone}
                  onChange={() => {
                    setPickOneLvl1Stone(!pickOneLvl1Stone);
                  }}
                />

                <span className="slider round"></span>
              </label>
            </div>
            <div className="field ">
              Золото (Gold):
              <label className="switch ml-3">
                <input
                  type="checkbox"
                  checked={pickOneLvl1Gold}
                  onChange={() => {
                    setPickOneLvl1Gold(!pickOneLvl1Gold);
                  }}
                />

                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="column">
          <p className="subtitle is-4">Ур. 2 (level 2)</p>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={pickOneLvl2}
                  onChange={(event) => {
                    setPickOneLvl2(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light"></span>
              </div>
            </div>
          </div>
          <div className="is-flex is-flex-direction-row is-justify-content-space-between">
            <div className="field ">
              Еда (Food):
              <label className="switch ml-3">
                <input
                  type="checkbox"
                  checked={pickOneLvl2Food}
                  onChange={() => {
                    setPickOneLvl2Food(!pickOneLvl2Food);
                  }}
                />

                <span className="slider round"></span>
              </label>
            </div>
            <div className="field ">
              Дерево (Wood):
              <label className="switch ml-3">
                <input
                  type="checkbox"
                  checked={pickOneLvl2Wood}
                  onChange={() => {
                    setPickOneLvl2Wood(!pickOneLvl2Wood);
                  }}
                />

                <span className="slider round"></span>
              </label>
            </div>
            <div className="field ">
              Камень (Stone):
              <label className="switch ml-3">
                <input
                  type="checkbox"
                  checked={pickOneLvl2Stone}
                  onChange={() => {
                    setPickOneLvl2Stone(!pickOneLvl2Stone);
                  }}
                />

                <span className="slider round"></span>
              </label>
            </div>
            <div className="field ">
              Золото (Gold):
              <label className="switch ml-3">
                <input
                  type="checkbox"
                  checked={pickOneLvl2Gold}
                  onChange={() => {
                    setPickOneLvl2Gold(!pickOneLvl2Gold);
                  }}
                />

                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="column">
          <p className="subtitle is-4">Ур. 3 (level 3)</p>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={pickOneLvl3}
                  onChange={(event) => {
                    setPickOneLvl3(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light"></span>
              </div>
            </div>
          </div>
          <div className="is-flex is-flex-direction-row is-justify-content-space-between">
            <div className="field ">
              Еда (Food):
              <label className="switch ml-3">
                <input
                  type="checkbox"
                  checked={pickOneLvl3Food}
                  onChange={() => {
                    setPickOneLvl3Food(!pickOneLvl3Food);
                  }}
                />

                <span className="slider round"></span>
              </label>
            </div>
            <div className="field ">
              Дерево (Wood):
              <label className="switch ml-3">
                <input
                  type="checkbox"
                  checked={pickOneLvl3Wood}
                  onChange={() => {
                    setPickOneLvl3Wood(!pickOneLvl3Wood);
                  }}
                />

                <span className="slider round"></span>
              </label>
            </div>
            <div className="field ">
              Камень (Stone):
              <label className="switch ml-3">
                <input
                  type="checkbox"
                  checked={pickOneLvl3Stone}
                  onChange={() => {
                    setPickOneLvl3Stone(!pickOneLvl3Stone);
                  }}
                />

                <span className="slider round"></span>
              </label>
            </div>
            <div className="field ">
              Золото (Gold):
              <label className="switch ml-3">
                <input
                  type="checkbox"
                  checked={pickOneLvl3Gold}
                  onChange={() => {
                    setPickOneLvl3Gold(!pickOneLvl3Gold);
                  }}
                />

                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="column">
          <p className="subtitle is-4">Ур. 4 (level 4)</p>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={pickOneLvl4}
                  onChange={(event) => {
                    setPickOneLvl4(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light"></span>
              </div>
            </div>
          </div>
          <div className="is-flex is-flex-direction-row is-justify-content-space-between">
            <div className="field ">
              Еда (Food):
              <label className="switch ml-3">
                <input
                  type="checkbox"
                  checked={pickOneLvl4Food}
                  onChange={() => {
                    setPickOneLvl4Food(!pickOneLvl4Food);
                  }}
                />

                <span className="slider round"></span>
              </label>
            </div>
            <div className="field ">
              Дерево (Wood):
              <label className="switch ml-3">
                <input
                  type="checkbox"
                  checked={pickOneLvl4Wood}
                  onChange={() => {
                    setPickOneLvl4Wood(!pickOneLvl4Wood);
                  }}
                />

                <span className="slider round"></span>
              </label>
            </div>
            <div className="field ">
              Камень (Stone):
              <label className="switch ml-3">
                <input
                  type="checkbox"
                  checked={pickOneLvl4Stone}
                  onChange={() => {
                    setPickOneLvl4Stone(!pickOneLvl4Stone);
                  }}
                />

                <span className="slider round"></span>
              </label>
            </div>
            <div className="field ">
              Золото (Gold):
              <label className="switch ml-3">
                <input
                  type="checkbox"
                  checked={pickOneLvl4Gold}
                  onChange={() => {
                    setPickOneLvl4Gold(!pickOneLvl4Gold);
                  }}
                />

                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="is-flex is-flex-direction-row is-justify-content-space-between">
        <p className="has-text-weight-bold">{`Еда (Food): ${(getPickOneFood() / 1000000).toFixed(
          2
        )}M`}</p>
        <p className="has-text-weight-bold">{`Дерево (Wood): ${(getPickOneWood() / 1000000).toFixed(
          2
        )}M`}</p>
        <p className="has-text-weight-bold">{`Камень (Stone): ${(
          getPickOneStone() / 1000000
        ).toFixed(2)}M`}</p>
        <p className="has-text-weight-bold">{` (Total): ${(getPickOneGold() / 1000000).toFixed(
          2
        )}M`}</p>
      </div>
      <h2 className="title is-2 mt-5">Набор ресурсов (Resource Packs)</h2>
      <div className="columns">
        <div className="column">
          <p className="subtitle is-4">A Ур. 1 (A level 1)</p>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={rssPackLvl1A}
                  onChange={(event) => {
                    setRssPack1A(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <p className="subtitle is-4">B Ур. 1 (B level 1)</p>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={rssPackLvl1B}
                  onChange={(event) => {
                    setRssPack1B(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <p className="subtitle is-4">C Ур. 1 (C level 1)</p>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={rssPackLvl1C}
                  onChange={(event) => {
                    setRssPack1C(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <p className="subtitle is-4"> Ур 2 (level 2)</p>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={rssPackLvl2}
                  onChange={(event) => {
                    setRssPack2(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="is-flex is-flex-direction-row is-justify-content-space-between">
        <p className="has-text-weight-bold">{`Еда (Food): ${(getLvlRssPackFood() / 1000000).toFixed(
          2
        )}M`}</p>
        <p className="has-text-weight-bold">{`Дерево (Wood): ${(
          getLvlRssPackWood() / 1000000
        ).toFixed(2)}M`}</p>
        <p className="has-text-weight-bold">{`Камень (Stone): ${(
          getLvlRssPackStone() / 1000000
        ).toFixed(2)}M`}</p>
        <p className="has-text-weight-bold">{` (Total): ${(getLvlRssPackGold() / 1000000).toFixed(
          2
        )}M`}</p>
      </div>
      <h2 className="title is-2 mt-5">На складе (On Store)</h2>
      <div className="columns">
        <div className="column">
          <p className="subtitle is-4">Еда (Food)</p>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={onStoreFood}
                  onChange={(event) => {
                    setOnStoreFood(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <p className="subtitle is-4">Дерево (Wood)</p>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={onStoreWood}
                  onChange={(event) => {
                    setOnStoreWood(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <p className="subtitle is-4">Камень (Stone)</p>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={onStoreStone}
                  onChange={(event) => {
                    setOnStoreStone(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <p className="subtitle is-4">Золото (Gold)</p>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <div className="control">
                <input
                  className="input ml-2"
                  type="text"
                  placeholder={`0`}
                  value={onStoreGold}
                  onChange={(event) => {
                    setOnStoreGold(event.target.value);
                  }}
                />
                <span className="icon is-small is-left  has-text-white has-background-grey-light"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="title is-2">Итого (Grand Total)</h2>
      <p className="subtitle is-4">
        Еда (Food):{' '}
        <span className="has-text-weight-bold">{(getGrandTotalFood() / 1000000).toFixed(2)}M</span>
      </p>
      <p className="subtitle is-4">
        Дерево (Wood):{' '}
        <span className="has-text-weight-bold">{(getGrandTotalWood() / 1000000).toFixed(2)}M</span>
      </p>
      <p className="subtitle is-4">
        Камень (Stone):{' '}
        <span className="has-text-weight-bold">{(getGrandTotalStone() / 1000000).toFixed(2)}M</span>
      </p>
      <p className="subtitle is-4">
        Золото (Gold):{' '}
        <span className="has-text-weight-bold">{(getGrandTotalGold() / 1000000).toFixed(2)}M</span>
      </p>
    </section>
  );
};

export default Rss;
