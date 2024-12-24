import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }


    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && (await this.usersService.validatePassword(password, user.password))) {
            const { password, ...result } = user;
            return result;
        }
        throw new UnauthorizedException('Invalid credentials');
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(createUserDto: CreateUserDto) {
        // Validate user details, hash the password, and save to the database
        const hashedPassword = await this.hashPassword(createUserDto.password);
        const newUser = await this.usersService.create(createUserDto);
        return { message: 'User registered successfully', user: newUser };
    }

    private async hashPassword(password: string): Promise<string> {
        // Use bcrypt or another library for hashing
        const bcrypt = require('bcrypt');
        const salt = await bcrypt.genSalt();
        return bcrypt.hash(password, salt);
    }
}
