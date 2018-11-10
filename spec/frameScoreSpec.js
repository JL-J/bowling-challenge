describe("FrameScore", function() {

  var scoreLogic = new ScoreLogic;
  var frameScore = new FrameScore(scoreLogic);

  describe("#newFrameScore", function () {
    it("starts a new game with strikes equalling 0", function() {
      expect(frameScore.strikes).toEqual(0);
    });
    it("starts a new game with spares equalling 0", function() {
      expect(frameScore.spares).toEqual(0);
    });
    it("starts a new game with frame score equalling 0", function() {
      expect(frameScore.frameScore).toEqual(0);
    });
  });

  describe("Spares", function () {
    it("updates the spares score when a player scores a spare", function() {
      frameScore.score(4,6);
      expect(frameScore.spares).toEqual(1);
    });
    it("updates the frame score to equal 'Spare'", function() {
      expect(frameScore.frameScore).toEqual('Spare');
    });
    it("on the next turn, it calculates the frame score, and spares equal 0 again", function() {
      frameScore.score(4,1);
      expect(frameScore.spares).toEqual(0);
      expect(frameScore.frameScore).toEqual(19);
    });
  });

  describe("Strikes", function () {
    it("updates the strikes score when a player scores a strike", function() {
      frameScore.score(10,0);
      expect(frameScore.strikes).toEqual(1);
    });
    it("updates the frame score to equal 'Strike'", function() {
      expect(frameScore.frameScore).toEqual('Strike');
    });
    it("on the next turn, it calculates the frame score, and strikes equal 0 again", function() {
      frameScore.score(3,6);
      expect(frameScore.strikes).toEqual(0);
      expect(frameScore.frameScore).toEqual(28);
    });
  })

  describe("No spares or strikes", function() {
    it("updates the frame score to an integer when no strikes or spares are rolled", function() {
      frameScore.score(2,5);
      expect(frameScore.frameScore).toEqual(7);
    });
  });

})
