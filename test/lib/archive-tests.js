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
        newTalks = [
          {
            title: 'Dans Second talk',
            milestone: 'September 26th 2015',
          }
        ];
        archived = archive(newTalks, oldTalks);
      });

      it('should increase the size of the archive', function() {
        expect(archived.length).to.equal(oldTalks.length + 1);
      });

      it('should create a new month as the first item in the archive', function() {
        expect(archived[0].date).to.equal('September 2015');
      });

      it('should add the new talk to the new month', function() {
        expect(archived[0].speakers[0].title).to.equal(newTalks[0].title);
      });
    });

    describe('Given talks which already exist in the archive but a change to the title', function() {
      before(function() {
        newTalks = [
          {
            title: 'WebRTC Reborn - BUT WITH A NEW TITLE &',
            milestone: 'August 26th 2015',
          }
        ];
        archived = archive(newTalks, oldTalks);
      });

      it('should not create a new month', function() {
        expect(archived.length).to.equal(oldTalks.length);
      });

      it('should replace all existing speakers from that month', function() {
        expect(archived[0].speakers.length).to.equal(newTalks.length);
      });

      it('should replace that months speakers with the new data', function() {
        expect(archived[0].speakers[0].title).to.equal(newTalks[0].title);
      });
    });
  });
});
