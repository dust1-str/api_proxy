import router from '@adonisjs/core/services/router';
import SongsController from '#controllers/songs_controller';
router.get('/', async () => {
    return {
        hello: 'world',
    };
});
router.get('/songs', [SongsController, 'index']);
router.post('/songs', [SongsController, 'store']);
router.put('/songs/:id', [SongsController, 'update']);
router.delete('/songs/:id', [SongsController, 'destroy']);
//# sourceMappingURL=routes.js.map