import { TestBed } from "@angular/core/testing";
import { CreditCardService } from "./credit-card.service";
import { cardErrors } from "./../static-data/card-errors";
import { cardList } from "../static-data/card-list";
import { from } from "rxjs";

describe("CreditCardService", () => {
  let service: CreditCardService;

  const errors = {
    VALID_CARD: "",
    UNKNOWN_TYPE: "",
    INVALID_NUMBER: "",
    INVALID_NUMBER_FORMAT: "",
    INVALID_LENGTH: "",
    SCAM_ATTEMPT: "",
  };

  [
    errors.VALID_CARD,
    errors.UNKNOWN_TYPE,
    errors.INVALID_NUMBER,
    errors.INVALID_NUMBER_FORMAT,
    errors.INVALID_LENGTH,
    errors.SCAM_ATTEMPT,
  ] = cardErrors;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardService);
  });

  it("should create CreditCardService", async () => {
    expect(service).toBeTruthy();
  });

  it(`should return message = '${errors.UNKNOWN_TYPE}' if does not exist cardTypeIndex`, () => {
    const result = service.testCreditCard("", "xxx");
    expect(result.message).toBe(errors.UNKNOWN_TYPE);
  });

  it(`should return message = '${errors.INVALID_NUMBER_FORMAT}' if card number format is not valid`, () => {
    const result = service.testCreditCard("xxx", "Visa");
    expect(result.message).toBe(errors.INVALID_NUMBER_FORMAT);
  });

  it(`should return message = '${errors.INVALID_NUMBER}' if card number did not pass the Luhn algorithm
check`, () => {
    const result = service.testCreditCard("4234 5678 9101 2131", "Visa");
    expect(result.message).toBe(errors.INVALID_NUMBER);
  });

  // test for all cards which number prefix is not valid

  it(`should return message = '${errors.INVALID_NUMBER}' if 'Visa' card number prefix is not valid (not in ${cardList[0].prefixes})`, () => {
    const result = service.testCreditCard("3111 1111 1111 1111", "Visa");
    expect(result.message).toBe(errors.INVALID_NUMBER);
  });

  it(`should return message = '${errors.INVALID_NUMBER}' if 'MasterCard' card number prefix is not valid (not in ${cardList[1].prefixes})`, () => {
    const result = service.testCreditCard("5000 0000 0000 0004", "MasterCard");
    expect(result.message).toBe(errors.INVALID_NUMBER);
  });

  it(`should return message = '${errors.INVALID_NUMBER}' if 'DinersClub' card number prefix is not valid (not in ${cardList[2].prefixes})`, () => {
    const result = service.testCreditCard("3911 1111 1111 1111", "DinersClub");
    expect(result.message).toBe(errors.INVALID_NUMBER);
  });

  it(`should return message = '${errors.INVALID_NUMBER}' if 'CarteBlanche' card number prefix is not valid (not in ${cardList[3].prefixes})`, () => {
    const result = service.testCreditCard(
      "3071 1111 1111 1111",
      "CarteBlanche"
    );
    expect(result.message).toBe(errors.INVALID_NUMBER);
  });

  it(`should return message = '${errors.INVALID_NUMBER}' if 'AmEx' card number prefix is not valid (not in ${cardList[4].prefixes})`, () => {
    const result = service.testCreditCard("3571 1111 1111 1111", "AmEx");
    expect(result.message).toBe(errors.INVALID_NUMBER);
  });

  it(`should return message = '${errors.INVALID_NUMBER}' if 'Discover' card number prefix is not valid (not in ${cardList[5].prefixes})`, () => {
    const result = service.testCreditCard("6015 1111 1111 1111", "Discover");
    expect(result.message).toBe(errors.INVALID_NUMBER);
  });

  it(`should return message = '${errors.INVALID_NUMBER}' if 'JCB' card number prefix is not valid (not in ${cardList[6].prefixes})`, () => {
    const result = service.testCreditCard("3715 1111 1111 1111", "JCB");
    expect(result.message).toBe(errors.INVALID_NUMBER);
  });

  it(`should return message = '${errors.INVALID_NUMBER}' if 'enRoute' card number prefix is not valid (not in ${cardList[7].prefixes})`, () => {
    const result = service.testCreditCard("2020 1111 1111 1111", "enRoute");
    expect(result.message).toBe(errors.INVALID_NUMBER);
  });

  it(`should return message = '${errors.INVALID_NUMBER}' if 'Solo' card number prefix is not valid (not in ${cardList[8].prefixes})`, () => {
    const result = service.testCreditCard("6336 1111 1111 1111", "Solo");
    expect(result.message).toBe(errors.INVALID_NUMBER);
  });

  it(`should return message = '${errors.INVALID_NUMBER}' if 'Switch' card number prefix is not valid (not in ${cardList[9].prefixes})`, () => {
    const result = service.testCreditCard("564185 11 1111 1111", "Switch");
    expect(result.message).toBe(errors.INVALID_NUMBER);
  });

  it(`should return message = '${errors.INVALID_NUMBER}' if 'Maestro' card number prefix is not valid (not in ${cardList[10].prefixes})`, () => {
    const result = service.testCreditCard("1141 8511 1111 1111", "Maestro");
    expect(result.message).toBe(errors.INVALID_NUMBER);
  });

  it(`should return message = '${errors.INVALID_NUMBER}' if 'VisaElectron' card number prefix is not valid (not in ${cardList[11].prefixes})`, () => {
    const result = service.testCreditCard(
      "417535 8511 1111 1111",
      "VisaElectron"
    );
    expect(result.message).toBe(errors.INVALID_NUMBER);
  });

  it(`should return message = '${errors.INVALID_NUMBER}' if 'LaserCard' card number prefix is not valid (not in ${cardList[12].prefixes})`, () => {
    const result = service.testCreditCard("6324 8511 1111 1111", "LaserCard");
    expect(result.message).toBe(errors.INVALID_NUMBER);
  });

  // credit card number "5490 9977 7109 2064" is associated with a scam attempt for cards with prefix "54"

  it(`should return message = '${errors.SCAM_ATTEMPT}' if it is scam number`, () => {
    const result = service.testCreditCard("5490 9977 7109 2064", "MasterCard");
    expect(result.message).toBe(errors.SCAM_ATTEMPT);
  });

  it(`should return message = '${errors.SCAM_ATTEMPT}' if it is scam number`, () => {
    const result = service.testCreditCard("5490 9977 7109 2064", "DinersClub");
    expect(result.message).toBe(errors.SCAM_ATTEMPT);
  });

  // test for all cards number which has an inappropriate number of digits

  it(`should return message = '${errors.INVALID_LENGTH}' if credit card number for "Visa" has not in [${cardList[0].length}] length`, () => {
    const result = service.testCreditCard("4906908747311531134", "Visa");
    expect(result.message).toBe(errors.INVALID_LENGTH);
  });

  it(`should return message = '${errors.INVALID_LENGTH}' if credit card number for "MasterCard" has not in [${cardList[1].length}] length`, () => {
    const result = service.testCreditCard("522606269882775200", "MasterCard");
    expect(result.message).toBe(errors.INVALID_LENGTH);
  });

  it(`should return message = '${errors.INVALID_LENGTH}' if credit card number for 'DinersClub' has not in [${cardList[2].length}] length`, () => {
    const result = service.testCreditCard("553039011971575600", "DinersClub");
    expect(result.message).toBe(errors.INVALID_LENGTH);
  });

  it(`should return message = '${errors.INVALID_LENGTH}' if credit card number for 'CarteBlanche' has not in [${cardList[3].length}] length`, () => {
    const result = service.testCreditCard("3012853417714500", "CarteBlanche");
    expect(result.message).toBe(errors.INVALID_LENGTH);
  });

  it(`should return message = '${errors.INVALID_LENGTH}' if credit card number for 'AmEx' has not in [${cardList[4].length}] length`, () => {
    const result = service.testCreditCard("34318908901666800", "AmEx");
    expect(result.message).toBe(errors.INVALID_LENGTH);
  });

  it(`should return message = '${errors.INVALID_LENGTH}' if credit card number for 'Discover' has not in [${cardList[5].length}] length`, () => {
    const result = service.testCreditCard("6011417489930994523", "Discover");
    expect(result.message).toBe(errors.INVALID_LENGTH);
  });

  it(`should return message = '${errors.INVALID_LENGTH}' if credit card number for 'JCB' has not in [${cardList[6].length}] length`, () => {
    const result = service.testCreditCard("3542878812536519882", "JCB");
    expect(result.message).toBe(errors.INVALID_LENGTH);
  });

  it(`should return message = '${errors.INVALID_LENGTH}' if credit card number for 'enRoute' has not in [${cardList[7].length}] length`, () => {
    const result = service.testCreditCard("2014 0000 0000 00900", "enRoute");
    expect(result.message).toBe(errors.INVALID_LENGTH);
  });

  it(`should return message = '${errors.INVALID_LENGTH}' if credit card number for 'Solo' has not in [${cardList[8].length}] length`, () => {
    const result = service.testCreditCard("6334 0000 0000 00049", "Solo");
    expect(result.message).toBe(errors.INVALID_LENGTH);
  });

  it(`should return message = '${errors.INVALID_LENGTH}' if credit card number for 'Switch' has not in [${cardList[9].length}] length`, () => {
    const result = service.testCreditCard("4903 0100 0000 00900", "Switch");
    expect(result.message).toBe(errors.INVALID_LENGTH);
  });

  it(`should return message = '${errors.INVALID_LENGTH}' if credit card number for 'Maestro' has not in [${cardList[10].length}] length`, () => {
    const result = service.testCreditCard("67634554408954807", "Maestro");
    expect(result.message).toBe(errors.INVALID_LENGTH);
  });

  it(`should return message = '${errors.INVALID_LENGTH}' if credit card number for 'VisaElectron' has not in [${cardList[11].length}] length`, () => {
    const result = service.testCreditCard("402603359453977000", "VisaElectron");
    expect(result.message).toBe(errors.INVALID_LENGTH);
  });

  it(`should return message = '${errors.INVALID_LENGTH}' if credit card number for 'LaserCard' has not in [${cardList[12].length}] length`, () => {
    const result = service.testCreditCard("6304 1000 0000 08", "LaserCard");
    expect(result.message).toBe(errors.INVALID_LENGTH);
  });
});
