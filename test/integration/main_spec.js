describe("Test example", () => {
  it("clicks on the button that triggers an alert", () => {
    const stub = cy.stub();

    cy.on("window:alert", stub);
    cy.contains("button", "test button")
      .click()
      .then(() => {
        expect(stub).to.have.been.called;
      });
  });
});
