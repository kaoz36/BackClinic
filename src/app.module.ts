import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesController } from './controllers/roles.controller';
import { RolesService } from './services/roles.service';
import { RolSchema } from './schemas/rol.schema';
import { UserSchema } from './schemas/user.schema';
import { DiseaseHistorySchema } from './schemas/disease-history.schema';
import { DiseaseHistoryController } from './controllers/disease-history.controller';
import { DiseaseHistoryService } from './services/disease-history.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/clinic'),
    MongooseModule.forFeature([
      { name: 'Rol', schema: RolSchema },
      { name: 'User', schema: UserSchema },
      { name: 'DiseaseHistory', schema: DiseaseHistorySchema },
    ])
  ],
  controllers: [AppController, UsersController, RolesController, DiseaseHistoryController],
  providers: [AppService, UsersService, RolesService, DiseaseHistoryService],
})

export class AppModule {}
