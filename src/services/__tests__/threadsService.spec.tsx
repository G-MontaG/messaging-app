import { getContacts, getThread } from "../threadsService";

describe("Threads Service", () => {
  describe("getContacts function", () => {
    test("should get contacts list", () => {
      const contacts = getContacts();
      expect(contacts).toHaveLength(2);
      expect(contacts[0]).toBe("value1");
    });
    test("should fall to default empty array if no contacts found", () => {
      localStorage.removeItem("contacts");
      const contacts = getContacts();
      expect(contacts).toHaveLength(0);
      expect(contacts).toStrictEqual([]);
    });
  });
  describe("getThread function", () => {
    test("should get thread list by contact id", () => {
      const contacts = getThread("1");
      expect(contacts).toHaveLength(2);
      expect(contacts[0]).toBe("message1");
    });
    test("should fall to default empty array if no thread found", () => {
      localStorage.removeItem("thread-1");
      const contacts = getThread("1");
      expect(contacts).toHaveLength(0);
      expect(contacts).toStrictEqual([]);
    });
  });
});
