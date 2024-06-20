// 5 minutes
const SESSION_EXPIRATION_TIME = 1000 * 60 * 5;

export class Session {
  #id;
  #timeout;
  #cart;

  constructor(id, timeout) {
    this.#id = id;
    this.#timeout = timeout;
    this.#cart = [];
  }

  id() {
    return this.#id;
  }

  addItem(id) {
    if (this.#timeout !== null) {
      this.#timeout.refresh();
    }
    let product = this.#cart.find((p) => p.id == id);
    if (product === undefined) {
      this.#cart.push({ id: id, amount: 0 });
    }
    for (let i = 0; i < this.#cart.length; i++) {
      if (this.#cart[i].id === id) {
        this.#cart[i].amount = this.#cart[i].amount + 1;
      }
    }
    product = this.#cart.find((p) => p.id == id);
    return product === undefined ? 0 : product.amount;
  }

  removeItem(id) {
    if (this.#timeout !== null) {
      this.#timeout.refresh();
    }
    this.#cart = this.#cart.map((p) => {
      return {
        id: p.id,
        amount: p.id == id ? Math.max(p.amount - 1, 0) : p.amount,
      };
    });
    let product = this.#cart.find((p) => p.id == id);
    return product === undefined ? 0 : product.amount;
  }

  getItem(id) {
    let product = this.#cart.find((p) => p.id == id);
    return product === undefined ? 0 : product.amount;
  }

  items() {
    return this.#cart;
  }
}

export class SessionManager {
  #sessions;

  constructor() {
    this.#sessions = [];
  }

  createSession() {
    let id = 0;
    // Choose the largest session id existing on the server
    for (const session of this.#sessions) {
      id = Math.max(id, session.id());
    }
    // Add one to its id to get a new session id
    id += 1;
    const timeout = setTimeout(
      () => this.#removeSession(id),
      SESSION_EXPIRATION_TIME,
    );
    const session = new Session(id, timeout);
    this.#sessions.push(session);
    return session;
  }

  getSession(id) {
    return this.#sessions.find((s) => s.id() == id);
  }

  #removeSession(id) {
    this.#sessions = this.#sessions.filter((s) => s.id() != id);
  }
}

const sessionManager = new SessionManager();

export default sessionManager;
