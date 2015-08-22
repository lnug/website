var expect = require('chai').expect;


describe('archive', function() {

  var archive;
  before(function() {
    archive = require('../../lib/archive');
  });

  it('should export a function', function() {
    expect(archive).to.be.a('function');
  });

  describe('Given an archive', function() {
    var oldTalks;
    var archived;
    var newTalks;

    before(function() {
      oldTalks = [{
          "date": "August 2015",
          "speakers": [
              {
                  "name": "Tomasz Janczuk",
                  "url": "https://github.com/tjanczuk",
                  "title": "Rethinking backend with webtasks"
              },
              {
                  "name": "Dan Jenkins",
                  "url": "https://github.com/danjenkins",
                  "title": "WebRTC Reborn"
              },
              {
                  "name": "Tim Perry",
                  "url": "https://github.com/pimterry",
                  "title": "TypeScript will finally bring peace to your troubled soul"
              }
          ]
      }];

    });


    describe('Given no new talks', function() {

      before(function() {
        newTalks = [];
        archived = archive(newTalks, oldTalks);
      });

      it('should return the old talks without any changes', function() {
        expect(archived).to.eql(oldTalks);
      });

    });


    describe('Given a new month with new talks (do not exist in the archive)', function() {

      before(function() {
        newTalks = [];
        archived = archive(newTalks, oldTalks);
      });

      it('should create a new month in the archive', function() {

      });
    })

    describe('Given talks with already exist in the archive', function() {
      it('should update the talk in the archive', function() {

      });

      it('should not change the length of the arhive', function() {

      });

    });

    describe('Given a new talk in a month that already exists in the archive', function() {

    });
  });



  // describe('Given a talk which has been updated');


});
