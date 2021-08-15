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

  const [gold500, setGold500] = useState(0);
  const [gold3000, setGold3000] = useState(0);
  const [gold15k, setGold15k] = useState(0);
  const [gold50k, setGold50k] = useState(0);
  const [gold200k, setGold200k] = useState(0);
  const [gold600k, seGold600k] = useState(0);
  const [gold2kk, setGold2kk] = useState(0);
  const [goldTotal, setGoldTotal] = useState(0);

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

  return (
    <section className="container">
      <div className="columns">
        <div className="column">
          <p className="subtitle is-2">Еда (Food)</p>
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
          <p className="subtitle is-2">Дерево (Wood)</p>
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
          <p className="subtitle is-2">Камень (Stone)</p>
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
      </div>
    </section>
  );
};

export default Rss;
